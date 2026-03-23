const Pomodoro = () => {
  return (
    <div className="flex flex-col gap-4 justify-center bg-warm-200 ">
      <div className="px-2 py-2 flex justify-between">
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 border rounded-xl border-violet-700 bg-violet-300 text-violet-700">
            Pomodoro
          </button>
          <button className="px-4 py-2 border rounded-xl border-violet-700 bg-violet-300 text-violet-700">
            Break
          </button>
        </div>
        <button>Setting</button>
      </div>
      <span className="px-10 py-6 border-2 border-skin-600 rounded-3xl text-9xl font-mono font-semibold ">
        25:00
      </span>
    </div>
  );
};

export default Pomodoro;
