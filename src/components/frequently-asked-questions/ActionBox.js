const ActionBox = () => {
  return (
    <div
      className="flex items-center justify-between w-full px-12 text-lg font-medium text-dusty-gray"
      dir="rtl"
    >
      <button className="flex items-center justify-center space-x-1.5 space-x-reverse">
        <SeeAllFAQIcon />
        <span>مشاهده تمام پرسش و پاسخ ها</span>
      </button>
      <button className="flex items-center justify-center space-x-1 space-x-reverse">
        <AddFAQIcon />
        <span>سوال جدیدی دارید، سوال جدید را ایجاد نمایید</span>
      </button>
    </div>
  );
};

const SeeAllFAQIcon = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 4.25H17.5"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.6084 8.4165H17.5001"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 12.5835H17.5"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.6084 16.75H17.5001"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const AddFAQIcon = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99984 18.8332C14.5832 18.8332 18.3332 15.0832 18.3332 10.4998C18.3332 5.9165 14.5832 2.1665 9.99984 2.1665C5.4165 2.1665 1.6665 5.9165 1.6665 10.4998C1.6665 15.0832 5.4165 18.8332 9.99984 18.8332Z"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.6665 10.5H13.3332"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 13.8332V7.1665"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ActionBox;
