const Organizations = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.6665 9.33337V11.3334"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3335 9.33337V11.3334"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3335 6.66663V14"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6665 6.66663V14"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 14H14"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6.66663H14"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 4.66674L8 2"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3335 4.66674L8.00016 2"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Organizations;
