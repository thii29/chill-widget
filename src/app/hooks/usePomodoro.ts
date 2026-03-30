'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PomodoroSettings } from '../models/widgetType';
import {
  DEFAULT_SETTING,
  loadSettings,
  saveSettings,
} from '../utils/pomodoroStorage';

export type SessionType = 'pomodoro' | 'shortBreak' | 'longBreak';

const getDuration = (type: SessionType, s: PomodoroSettings): number => {
  if (type === 'pomodoro') return s.pomodoro * 60;
  if (type === 'shortBreak') return s.shortBreak * 60;
  return s.longBreak * 60;
};

const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

export const usePomodoro = () => {
  const [settings, setSettings] = useState<PomodoroSettings>(() => {
    if (typeof window === 'undefined') return DEFAULT_SETTING; // SSR safe
    return loadSettings();
  });

  const [timeLeft, setTimeLeft] = useState<number>(() => {
    if (typeof window === 'undefined') return DEFAULT_SETTING.pomodoro * 60;
    return loadSettings().pomodoro * 60;
  });
  const [sessionType, setSessionType] = useState<SessionType>('pomodoro');
  const [sessionCount, setSessionCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const saved = loadSettings();
    setSettings(saved);
    setTimeLeft(saved.pomodoro * 60);
  }, []);

  // Refs so interval callback always reads latest state
  const settingsRef = useRef(settings);
  const sessionTypeRef = useRef(sessionType);
  const sessionCountRef = useRef(sessionCount);

  useEffect(() => {
    settingsRef.current = settings;
  }, [settings]);
  useEffect(() => {
    sessionTypeRef.current = sessionType;
  }, [sessionType]);
  useEffect(() => {
    sessionCountRef.current = sessionCount;
  }, [sessionCount]);

  // Called when a session countdown hits 0
  const handleSessionEnd = useCallback(() => {
    const s = settingsRef.current;
    const type = sessionTypeRef.current;
    const count = sessionCountRef.current;

    if (type === 'pomodoro') {
      const newCount = count + 1;
      setSessionCount(newCount);

      const nextType: SessionType =
        newCount % s.longBreakInterval === 0 ? 'longBreak' : 'shortBreak';

      setSessionType(nextType);
      setTimeLeft(getDuration(nextType, s));
      setIsRunning(s.autoStartBreak);
    } else if (type === 'shortBreak') {
      setSessionType('pomodoro');
      setTimeLeft(getDuration('pomodoro', s));
      // autoResumeCycle drives focus auto-start after short break
      setIsRunning(s.autoResumeCycle);
    } else {
      // longBreak ended → full cycle complete → reset everything
      setSessionCount(0);
      setSessionType('pomodoro');
      setTimeLeft(getDuration('pomodoro', s));
      setIsRunning(false);
    }
  }, []);

  // Core countdown effect — restarts whenever isRunning flips to true
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimeout(handleSessionEnd, 0); // defer to avoid mid-render setState
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, handleSessionEnd]);

  // ── Public controls ──────────────────────────────────────────────────────

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);

  const reset = () => {
    setIsRunning(false);
    setSessionType('pomodoro');
    setSessionCount(0);
    setTimeLeft(getDuration('pomodoro', settings));
  };

  // Called when user saves settings in the modal
  const updateSettings = (next: PomodoroSettings) => {
    saveSettings(next);
    setSettings(next);
    setIsRunning(false);
    setSessionType('pomodoro');
    setSessionCount(0);
    setTimeLeft(getDuration('pomodoro', next));

    if (next.autoStartFocus) {
      setTimeout(() => setIsRunning(true), 50); // brief delay for state flush
    }
  };

  return {
    timeDisplay: formatTime(timeLeft),
    isRunning,
    isBreakTime: sessionType !== 'pomodoro',
    sessionType,
    settings,
    start,
    pause,
    reset,
    updateSettings,
  };
};
