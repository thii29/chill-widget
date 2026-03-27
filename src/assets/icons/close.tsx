import { Dimension } from '@/src/app/models/iconsType';

const Close = ({ width, height }: Dimension) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="11" y="11" width="2" height="2" fill="currentColor" />
      <path
        d="M11 11H9V9H11V11ZM9 9H7V7H9V9ZM7 7H5V5H7V7ZM5 5H3V3H5V5Z"
        fill="currentColor"
      />
      <path
        d="M21 21H19V19H21V21ZM19 19H17V17H19V19ZM17 17H15V15H17V17ZM15 15H13V13H15V15Z"
        fill="currentColor"
      />
      <path
        d="M15 11H13V9H15V11ZM17 9H15V7H17V9ZM19 7H17V5H19V7ZM21 5H19V3H21V5Z"
        fill="currentColor"
      />
      <path
        d="M5 21H3V19H5V21ZM7 19H5V17H7V19ZM9 17H7V15H9V17ZM11 15H9V13H11V15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Close;
