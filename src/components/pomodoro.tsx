'use client';
import { useState } from 'react';
import Coffee from '../assets/icons/coffee';
import Hourglass from '../assets/icons/hourglass';
import Pause from '../assets/icons/pause';
import Reset from '../assets/icons/reset';
import Start from '../assets/icons/start';
import Setting from './setting';

const Pomodoro = () => {
  let isBreakTime: boolean = false;
  let isPause: boolean = true;

  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const handleOpenSetting = () => {
    setIsOpenSetting(true);
  };
  const handleCloseSetting = () => {
    setIsOpenSetting(false);
  };

  return (
    <div className="flex flex-col gap-5 justify-center rounded-2xl px-8 py-6 bg-white">
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
        <button onClick={handleOpenSetting}>Setting</button>
      </div>
      <span className="flex items-center justify-center px-10 py-6 border rounded-xl text-9xl font-mono font-semibold">
        25:00
      </span>
      <div className="flex gap-6 justify-center items-center">
        <button>
          {isPause ? (
            <Pause width="48" height="48" />
          ) : (
            <Start width="48" height="48" />
          )}
        </button>
        <button>
          <Reset width="48" height="48" />
        </button>
      </div>
      <Setting isOpen={isOpenSetting} onClose={handleCloseSetting} />
    </div>
  );
};

export default Pomodoro;
