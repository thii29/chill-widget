'use client'
import { useState } from 'react';
import Close from '../assets/icons/close';
import { PomodoroSettings} from '../app/models/widgetType';

type Props = {
  isOpen: boolean;
  settings: PomodoroSettings;
  onClose: () => void;
  onSave: (s: PomodoroSettings) => void;
};

const Setting = ({ isOpen, onClose, settings, onSave }: Props) => {
  if (!isOpen) return null;
  const [draft, setDraft] = useState<PomodoroSettings>(settings);

  const set = (key: keyof PomodoroSettings, value: number | boolean) =>
    setDraft((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    onSave(draft);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center font-sans">
      <div className="w-2xl flex flex-col gap-2.5 px-6 py-4 rounded-xl bg-deep-slate text-mint-white">
        {/* Close button */}
        <div className="w-full flex justify-end mb-2">
          <button
            onClick={onClose}
            className="w-fit cursor-pointer p-2 rounded-md hover:bg-mint-white hover:text-deep-slate"
          >
            <Close width="28" height="28" />
          </button>
        </div>
        {/* Set up time */}
        <div className="grid grid-cols-2 gap-4 my-2">
          <div className="flex flex-col justify-start gap-1">
            <span>Pomodoro</span>
            <input
              type="number"
              name="pomodoro"
              min={10}
              value={draft?.pomodoro}
              onChange={(e) => set('pomodoro', Number(e.target.value))}
              className="border rounded-md px-3 py-1.5"
            />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <span>Short break</span>
            <input
              type="number"
              name="short-break"
              min={5}
              value={draft?.shortBreak}
              onChange={(e) => set('shortBreak', Number(e.target.value))}
              className="border rounded-md  px-3 py-1.5"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-2">
          <div className="flex flex-col justify-start gap-1">
            <span>Long break</span>
            <input
              type="number"
              name="long-break"
              min={10}
              value={draft?.longBreak}
              onChange={(e) => set('longBreak', Number(e.target.value))}
              className="border rounded-md  px-3 py-1.5"
            />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <span>Long break interval</span>
            <input
              type="number"
              name="long-break-interval"
              min={2}
              value={draft?.longBreakInterval}
              onChange={(e) => set('longBreakInterval', Number(e.target.value))}
              className="border rounded-md  px-3 py-1.5"
            />
          </div>
        </div>
        {/* Custom options */}
        <div className="flex flex-col gap-3.5">
          {(
            [
              ['autoStartBreak', 'Auto-start Break'],
              ['autoStartFocus', 'Auto-start Focus'],
              ['autoResumeCycle', 'Auto-resume Cycle'],
            ] as const
          ).map(([key, label]) => (
            <div key={key} className="w-full flex justify-between items-center">
              <span>{label}</span>
              <input
                type="checkbox"
                checked={draft[key]}
                onChange={(e) => set(key, e.target.checked)}
                className="toggle toggle-lg border border-ice-white text-ice-white checked:text-soft-periwinkle checked:bg-mint-white checked:border-mint-white"
              />
            </div>
          ))}
        </div>
        {/* Save change btn */}
        <div className="flex justify-end mt-2 p-2">
          <button
            onClick={handleSave}
            className="w-fit cursor-pointer px-3 py-2 rounded-md hover:bg-mint-white hover:text-deep-slate"
          >
            Save change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
