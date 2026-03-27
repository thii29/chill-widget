import { Dimension } from '@/src/app/models/iconsType';

const Pause = ({ width, height }: Dimension) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 22H5V20H9V22ZM5 20H3V4H5V20ZM11 20H9V4H11V20ZM9 4H5V2H9V4Z"
        fill="currentColor"
      />
      <path
        d="M19 22H15V20H19V22ZM15 20H13V4H15V20ZM21 20H19V4H21V20ZM19 4H15V2H19V4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Pause;
