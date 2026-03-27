import Calendar from '../components/calendar';
import Pomodoro from '../components/pomodoro';
import SoundList from '../components/soundlist';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center gap-6 bg-linear-120 from-frost-blue to-pale-laveder">
      <Pomodoro />
      <div className="flex flex-col gap-6">
        <Calendar />
        <SoundList />
      </div>
    </div>
  );
}
