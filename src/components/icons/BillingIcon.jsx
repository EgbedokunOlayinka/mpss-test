const BillingIcon = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.3335 4.66667C1.3335 4.29848 1.63198 4 2.00016 4H14.0002C14.3684 4 14.6668 4.29848 14.6668 4.66667V11.3333C14.6668 11.7015 14.3684 12 14.0002 12H2.00016C1.63198 12 1.3335 11.7015 1.3335 11.3333V4.66667Z"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99984 9.33329C8.73622 9.33329 9.33317 8.73634 9.33317 7.99996C9.33317 7.26358 8.73622 6.66663 7.99984 6.66663C7.26346 6.66663 6.6665 7.26358 6.6665 7.99996C6.6665 8.73634 7.26346 9.33329 7.99984 9.33329Z"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.01074 8.01073L4 8"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0107 8.01073L12 8"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BillingIcon;
