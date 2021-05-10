const HomeIcon = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6.83333V13.3333C2 13.7015 2.29847 14 2.66667 14H5.61905C5.98724 14 6.28571 13.7015 6.28571 13.3333V8.85713H9.71427V13.3333C9.71427 13.7015 10.0127 14 10.3809 14H13.3333C13.7015 14 14 13.7015 14 13.3333V6.83333C14 6.62349 13.9012 6.4259 13.7333 6.3L8 2L2.26667 6.3C2.09879 6.4259 2 6.62349 2 6.83333Z"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
