import { Dimension } from '@/src/app/models/iconsType';

const Reset = ({ width, height }: Dimension) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 21H8V19H18V21Z" fill="#060606" />
      <path d="M8 19H6V17H8V19Z" fill="#060606" />
      <path d="M20 19H18V17H20V19Z" fill="#060606" />
      <path d="M6 17H4V14H6V17Z" fill="#060606" />
      <path d="M22 17H20V7H22V17Z" fill="#060606" />
      <path d="M4 7H6V9H8V11H2V5H4V7Z" fill="#060606" />
      <path d="M8 7H6V5H8V7Z" fill="#060606" />
      <path d="M20 7H18V5H20V7Z" fill="#060606" />
      <path d="M18 5H8V3H18V5Z" fill="#060606" />
    </svg>
  );
};

export default Reset;
