import React from 'react';
import Close from '../assets/icons/close';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Setting = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="w-2xl flex flex-col gap-2.5 px-6 py-4 rounded-xl bg-deep-slate text-glacier text-lg">
        <div className="w-full flex justify-end mb-2">
          <button
            onClick={onClose}
            className="w-fit cursor-pointer p-2 rounded-md hover:bg-midnight hover:text-ice-white"
          >
            <Close width="28" height="28" />
          </button>
        </div>
        {/* Set up time */}
        <div className="grid grid-cols-3 gap-4 my-2">
          <div className="font-sans">
            <div className="flex flex-col justify-start gap-1">
              <span>Sessions</span>
              <input
                type="number"
                name="sessions"
                id=""
                className="border rounded-md"
              />
            </div>
          </div>
          <div className="font-sans">
            <div className="flex flex-col justify-start gap-1">
              <span>Pomodoro</span>
              <input
                type="number"
                name="pomodoro"
                id=""
                className=" border rounded-md"
              />
            </div>
          </div>
          <div className="font-sans">
            <div className="flex flex-col justify-start gap-1">
              <span>Short break</span>
              <input
                type="number"
                name="short-break"
                id=""
                className="border rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-2">
          <div className="font-sans">
            <div className="flex flex-col justify-start gap-1">
              <span>Long break</span>
              <input
                type="number"
                name="long-break"
                id=""
                className="border rounded-md"
              />
            </div>
          </div>
          <div className="font-sans">
            <div className="flex flex-col justify-start gap-1">
              <span>Long break interval</span>
              <input
                type="number"
                name="long-break-interval"
                id=""
                className="border rounded-md"
              />
            </div>
          </div>
        </div>
        {/* Custom options */}
        <div className="flex flex-col gap-2.5">
          <div className="w-full flex justify-between items-center">
            <span>Auto-start Breaks</span>
            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-lg border border-midnight text-pale-laveder"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <span>Auto-start Focus</span>
            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-lg border border-midnight text-pale-laveder"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <span>Auto-resume Cycle</span>
            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-lg border border-midnight text-pale-laveder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
