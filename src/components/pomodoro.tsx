import Image from 'next/image'
import settingIcon from '@/src/assets/setting.png'

const Pomodoro = () => {
  return (
    <div className="flex flex-col gap-4 justify-center bg-warm-200 ">
      <button>
        <Image src={settingIcon} alt="setting-btn" width={32} height={32}></Image>
      </button>
      <span className="px-10 py-6 border-2 border-skin-600 rounded-3xl text-9xl font-mono font-semibold ">
        25:00
      </span>
    </div>
  );
};

export default Pomodoro;
