const ContactsIcon = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00016 7.33333C9.47292 7.33333 10.6668 6.13943 10.6668 4.66667C10.6668 3.19391 9.47292 2 8.00016 2C6.5274 2 5.3335 3.19391 5.3335 4.66667C5.3335 6.13943 6.5274 7.33333 8.00016 7.33333Z"
        stroke={active ? "#293c73" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6665 14V11.3333C2.6665 10.5969 3.26346 10 3.99984 10H11.9998C12.7362 10 13.3332 10.5969 13.3332 11.3333V14"
        stroke={active ? "#293c73" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ContactsIcon;
