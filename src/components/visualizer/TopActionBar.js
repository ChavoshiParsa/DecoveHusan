const TopActionBar = () => {
  return (
    <div
      className="flex items-center justify-center space-x-12 space-x-reverse bg-spring-green py-7 font-yekan text-xl font-extrabold text-white"
      dir="rtl"
    >
      <button className="flex items-center justify-center space-x-2 space-x-reverse">
        <DeleteProductIcon />
        <label>حذف محصول</label>
      </button>
      <button className="flex items-center justify-center space-x-2 space-x-reverse">
        <RotateProductIcon />
        <label>چرخش محصول</label>
      </button>
      <button className="flex items-center justify-center space-x-2 space-x-reverse">
        <ChangeRoomIcon />
        <label>تعویض اتاق</label>
      </button>
    </div>
  );
};

const DeleteProductIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 6.48001C17.67 6.15001 14.32 5.98001 10.98 5.98001C9 5.98001 7.02 6.08001 5.04 6.28001L3 6.48001"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 5.47L8.72 4.16C8.88 3.21 9 2.5 10.69 2.5H13.31C15 2.5 15.13 3.25 15.28 4.17L15.5 5.47"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.85 9.64001L18.2 19.71C18.09 21.28 18 22.5 15.21 22.5H8.79002C6.00002 22.5 5.91002 21.28 5.80002 19.71L5.15002 9.64001"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.33 17H13.66"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 13H14.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const RotateProductIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.89 5.57999C14.02 5.31999 13.06 5.14999 12 5.14999C7.20996 5.14999 3.32996 9.02999 3.32996 13.82C3.32996 18.62 7.20996 22.5 12 22.5C16.79 22.5 20.67 18.62 20.67 13.83C20.67 12.05 20.13 10.39 19.21 9.00999"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.13 5.82L13.24 2.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.13 5.82001L12.76 8.28001"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ChangeRoomIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 10.5C10.1046 10.5 11 9.60457 11 8.5C11 7.39543 10.1046 6.5 9 6.5C7.89543 6.5 7 7.39543 7 8.5C7 9.60457 7.89543 10.5 9 10.5Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.67004 19.45L7.60004 16.14C8.39004 15.61 9.53004 15.67 10.24 16.28L10.57 16.57C11.35 17.24 12.61 17.24 13.39 16.57L17.55 13C18.33 12.33 19.59 12.33 20.37 13L22 14.4"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default TopActionBar;
