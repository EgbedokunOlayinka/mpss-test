const SettingsIcon = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.71756 2.10878C6.7575 1.66963 7.1257 1.33337 7.56663 1.33337H8.4337C8.87463 1.33337 9.24283 1.66963 9.28276 2.10878C9.31556 2.46932 9.57503 2.76366 9.91403 2.89071C10.0012 2.92337 10.0873 2.9582 10.1723 2.99513C10.5077 3.1409 10.9022 3.11296 11.1832 2.87883C11.5304 2.58951 12.0409 2.61267 12.3604 2.93223L12.9724 3.54419C13.2771 3.84888 13.2992 4.33563 13.0233 4.66665C12.7936 4.94237 12.7722 5.33167 12.9266 5.65565C12.9935 5.79595 13.0546 5.93955 13.1095 6.08615C13.2366 6.42515 13.5309 6.68464 13.8914 6.71744C14.3306 6.75737 14.6668 7.12557 14.6668 7.56651V8.43357C14.6668 8.87451 14.3306 9.24271 13.8914 9.28264C13.5309 9.31544 13.2366 9.57491 13.1095 9.91391C13.0602 10.0455 13.0059 10.1747 12.947 10.3012C12.8037 10.6087 12.8269 10.9758 13.044 11.2364C13.3082 11.5534 13.287 12.0194 12.9953 12.3112L12.3113 12.9952C12.0196 13.2869 11.5535 13.308 11.2366 13.0439C10.976 12.8268 10.6088 12.8036 10.3014 12.9468C10.1748 13.0058 10.0456 13.06 9.91403 13.1094C9.57503 13.2364 9.31556 13.5308 9.28276 13.8913C9.24283 14.3304 8.87463 14.6667 8.4337 14.6667H7.56663C7.1257 14.6667 6.7575 14.3304 6.71756 13.8913C6.68476 13.5308 6.42528 13.2364 6.08628 13.1094C5.93968 13.0544 5.79608 12.9934 5.65578 12.9265C5.3318 12.772 4.9425 12.7934 4.66678 13.0232C4.33575 13.299 3.849 13.277 3.54431 12.9723L2.93236 12.3603C2.61278 12.0408 2.58963 11.5302 2.87895 11.183C3.11309 10.9021 3.14102 10.5076 2.99525 10.1722C2.95832 10.0872 2.9235 10.0011 2.89083 9.91391C2.76379 9.57491 2.46944 9.31544 2.1089 9.28264C1.66975 9.24271 1.3335 8.87451 1.3335 8.43357V7.56651C1.3335 7.12557 1.66975 6.75737 2.1089 6.71744C2.46945 6.68464 2.76379 6.42516 2.89084 6.08615C2.92923 5.98371 2.97062 5.88272 3.01489 5.7833C3.17156 5.43148 3.14552 5.01509 2.89897 4.71922C2.59831 4.35843 2.62238 3.8279 2.95446 3.49581L3.49592 2.95435C3.82802 2.62225 4.35854 2.59819 4.71934 2.89885C5.0152 3.14541 5.4316 3.17144 5.78342 3.01477C5.88284 2.97049 5.98382 2.92911 6.08627 2.89071C6.42528 2.76367 6.68476 2.46933 6.71756 2.10878Z"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8C10 9.1046 9.1046 10 8 10C6.8954 10 6 9.1046 6 8C6 6.8954 6.8954 6 8 6C9.1046 6 10 6.8954 10 8Z"
        stroke={active ? "#27459C" : "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingsIcon;
