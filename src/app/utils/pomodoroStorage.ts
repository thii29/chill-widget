import { PomodoroSettings, STORAGE } from '../models/widgetType';

export const DEFAULT_SETTING: PomodoroSettings = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
  autoStartBreak: false,
  autoStartFocus: false,
  autoResumeCycle: false,
};

const STORAGE_KEY = STORAGE.STORAGE_KEY;
const EXPIRY_MS = STORAGE.EXPIRY_MS;

export const loadSettings = (): PomodoroSettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return DEFAULT_SETTING;
    }
    const { data, timeStamp } = JSON.parse(raw);
    if (Date.now() - timeStamp > EXPIRY_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return DEFAULT_SETTING;
    }

    return { ...DEFAULT_SETTING, ...data };
  } catch {
    return DEFAULT_SETTING;
  }
};

export const saveSettings = (settings: PomodoroSettings): void => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      data: settings,
      timeStamp: Date.now(),
    }),
  );
};

