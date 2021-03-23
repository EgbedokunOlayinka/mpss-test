const LogoutIcon = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.6665 8H9.99984"
        stroke={active ? "#293c73" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33333 4.66663L2 7.99996L5.33333 11.3333"
        stroke={active ? "#293c73" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V14"
        stroke={active ? "#293c73" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
