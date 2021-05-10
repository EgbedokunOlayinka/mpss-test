const FormsIcon = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33317 4.00004H10.6665H5.33317ZM5.33317 6.66671H10.6665H5.33317ZM5.33317 9.33337H7.33317H5.33317ZM3.99984 14.6667H11.9998C12.7362 14.6667 13.3332 14.0698 13.3332 13.3334V2.66671C13.3332 1.93033 12.7362 1.33337 11.9998 1.33337H3.99984C3.26346 1.33337 2.6665 1.93033 2.6665 2.66671V13.3334C2.6665 14.0698 3.26346 14.6667 3.99984 14.6667Z"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FormsIcon;
