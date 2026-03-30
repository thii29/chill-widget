'use client';
import { useState } from 'react';
import Coffee from '../assets/icons/coffee';
import Hourglass from '../assets/icons/hourglass';
import Pause from '../assets/icons/pause';
import Reset from '../assets/icons/reset';
import Start from '../assets/icons/start';
import Setting from './setting';
import { usePomodoro } from '../app/hooks/usePomodoro';

const Pomodoro = () => {
  const {
    timeDisplay,
    isRunning,
    isBreakTime,
    settings,
    start,
    pause,
    reset,
    updateSettings,
  } = usePomodoro();

  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const handleOpenSetting = () => {
    setIsOpenSetting(true);
  };

  return (
    <div className="flex flex-col gap-5 justify-center rounded-2xl px-8 py-6 bg-deep-slate  text-frost-blue">
      <div className="flex justify-between items-center  text-xl font-mono">
        {isBreakTime ? (
          <div className="flex items-center gap-2">
            <Coffee width="32" height="32" />
            Break Time
          </div>
        ) : (
          <div className="flex items-center gap-2 font-mono">
            <Hourglass width="32" height="32" />
            Pomodoro
          </div>
        )}
        <button
          onClick={handleOpenSetting}
          className="w-fit px-4 py-2 rounded-xl cursor-pointer hover:bg-frost-blue hover:text-deep-slate"
        >
          Setting
        </button>
      </div>
      <span className="flex items-center justify-center px-10 py-6 border rounded-xl text-9xl font-mono font-semibold">
        {timeDisplay}
      </span>
      <div className="flex gap-6 justify-center items-center">
        <button
          onClick={isRunning ? pause : start}
          className="cursor-pointer transition delay-200 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          {isRunning ? (
            <Pause width="48" height="48" />
          ) : (
            <Start width="48" height="48" />
          )}
        </button>
        <button
          onClick={reset}
          className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          <Reset width="48" height="48" />
        </button>
      </div>
      <Setting
        isOpen={isOpenSetting}
        settings={settings}
        onClose={() => setIsOpenSetting(false)}
        onSave={updateSettings}
      />
    </div>
  );
};

export default Pomodoro;
