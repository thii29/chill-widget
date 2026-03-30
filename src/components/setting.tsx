import { useState } from 'react';
import Close from '../assets/icons/close';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Setting = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  const [pomodoro, setPomodoro] = useState<number>(25);
  const [shortBreak, setShortBreak] = useState<number>(5);
  const [longBreak, setLongBreak] = useState<number>(15);
  const [longBreakInterval, setLongBreakInterval] = useState<number>(4);
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
              value={pomodoro}
              id=""
              className="border rounded-md px-3 py-1.5"
            />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <span>Short break</span>
            <input
              type="number"
              name="short-break"
              value={shortBreak}
              id=""
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
              value={longBreak}
              id=""
              className="border rounded-md  px-3 py-1.5"
            />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <span>Long break interval</span>
            <input
              type="number"
              name="long-break-interval"
              value={longBreakInterval}
              id=""
              className="border rounded-md  px-3 py-1.5"
            />
          </div>
        </div>
        {/* Custom options */}
        <div className="flex flex-col gap-3.5">
          <div className="w-full flex justify-between items-center">
            <span>Auto-start Breaks</span>
            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-lg border border-ice-white text-ice-white checked:text-soft-periwinkle checked:bg-mint-white checked:border-mint-white"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <span>Auto-start Focus</span>
            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-lg border border-ice-white text-ice-white checked:text-soft-periwinkle checked:bg-mint-white checked:border-mint-white"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <span>Auto-resume Cycle</span>
            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-lg border border-ice-white text-ice-white checked:text-soft-periwinkle checked:bg-mint-white checked:border-mint-white"
            />
          </div>
        </div>
        {/* Save change btn */}
        <div className="flex justify-end mt-2 p-2">
          <button className="w-fit cursor-pointer px-3 py-2 rounded-md hover:bg-mint-white hover:text-deep-slate">
            Save change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
