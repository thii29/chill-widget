import Image from 'next/image';
import matchaCat from '@/src/assets/matcha-cat.svg';

const Pomodoro = () => {
  const isBreakTime: boolean = true;
  return (
    <div className="flex flex-col gap-4 justify-center bg-warm-200 ">
      <div className="flex justify-between font-sans text-2xl">
        {isBreakTime ? (
          <div className="flex justify-center items-center gap-2">
            {' '}
            <Image
              src={matchaCat}
              alt="button icon"
              width={64}
              height={64}
            />{' '}
            Break Time
          </div>
        ) : (
          <div>Pomodoro</div>
        )}
        <button>Setting</button>
      </div>
      <span className="px-10 py-6 border-2 border-skin-600 rounded-3xl text-9xl font-mono font-semibold ">
        25:00
      </span>
    </div>
  );
};

export default Pomodoro;
