export const STORAGE = {
  STORAGE_KEY: 'pomodoro setting',
  EXPIRY_MS: 24 * 60 * 60 * 1000,
} as const;

export type PomodoroSettings = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
  autoStartBreak: boolean;
  autoStartFocus: boolean;
  autoResumeCycle: boolean;
};

