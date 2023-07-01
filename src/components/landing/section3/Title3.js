const Title3 = (props) => {
  return (
    <div className="flex flex-col items-center justify-around space-y-5">
      <Icon />
      <h3 className="relative font-yekan text-3xl font-semibold text-blue-zodiac">
        <Rect />
        نحوه عملکرد دِکووی
      </h3>
      <p className="text-center font-yekan text-xl leading-10 text-dusty-gray">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر{" "}
      </p>
    </div>
  );
};

const Icon = () => {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74.3548 38.8237C73.5929 35.2005 72.1489 31.7168 70.1206 28.6083L73.694 25.0348L64.9597 16.2998L61.3865 19.8735C58.2782 17.845 54.7948 16.4011 51.1719 15.639V10.5884H38.82V15.639C35.1971 16.401 31.7135 17.845 28.6054 19.8735L25.0322 16.2998L16.2979 25.0348L19.8714 28.6083C17.843 31.7167 16.399 35.2004 15.6371 38.8237H10.5869V51.1766H15.6371C16.399 54.7997 17.843 58.2834 19.8714 61.3919L16.2979 64.9655L25.0322 73.7004L28.6054 70.1267C31.7135 72.1552 35.197 73.5993 38.82 74.3613V79.4118H51.1719V74.3613C54.7948 73.5993 58.2782 72.1552 61.3865 70.1267L64.9597 73.7004L73.694 64.9655L70.1206 61.3919C72.1489 58.2836 73.5929 54.7999 74.3548 51.1766H79.405V38.8237H74.3548ZM44.996 65.2942C33.7887 65.2942 24.7034 56.2083 24.7034 45.0001C24.7034 33.7919 33.7887 24.706 44.996 24.706C56.2032 24.706 65.2885 33.7919 65.2885 45.0001C65.2885 56.2083 56.2032 65.2942 44.996 65.2942Z"
        fill="#2BEE84"
      />
      <path
        d="M71.3573 2.44657C71.2322 1.47994 70.348 0.79776 69.3808 0.923221C68.4142 1.04833 67.7322 1.93343 67.8575 2.89971L68.3242 6.50348C61.3145 2.2387 53.3272 0 44.9966 0C35.3307 0 26.1251 3.01123 18.3748 8.70849C17.5896 9.28568 17.4211 10.3901 17.9981 11.1754C18.5753 11.9608 19.6802 12.1289 20.4649 11.5521C33.6383 1.86832 51.5785 1.01833 65.5905 8.99858L62.8874 9.34867C61.9208 9.47378 61.2388 10.3589 61.3641 11.3252C61.4895 12.2955 62.3785 12.9736 63.3405 12.8485L70.7999 11.8824C71.6386 11.7739 72.2885 11.0748 72.334 10.2301C72.3554 9.84981 72.2684 9.66576 71.3573 2.44657Z"
        fill="#032068"
      />
      <path
        d="M69.5281 78.4469C56.3548 88.1307 38.4146 88.9807 24.4025 81.0004L27.1058 80.6503C28.0725 80.5252 28.7545 79.6401 28.6292 78.6739C28.5043 77.7072 27.619 77.0256 26.6527 77.1505L19.1934 78.1166C18.2184 78.2428 17.546 79.1425 17.67 80.0931L18.6361 87.5524C18.7512 88.4421 19.5101 89.0908 20.3837 89.0906C21.4543 89.0906 22.2722 88.1512 22.1359 87.0993L21.6692 83.4955C28.6788 87.7605 36.6663 89.999 44.9968 89.999C54.6627 89.999 63.8683 86.9878 71.6186 81.2905C72.4038 80.7133 72.5724 79.6089 71.9953 78.8237C71.4178 78.0383 70.313 77.8699 69.5281 78.4469Z"
        fill="#032068"
      />
      <path
        d="M87.0935 67.8627L83.4897 68.3294C92.7495 53.1092 92.2351 33.2741 81.2847 18.3761C80.7076 17.591 79.6031 17.4227 78.8179 17.9994C78.0326 18.5766 77.8641 19.6811 78.4411 20.4664C88.1247 33.6406 88.9747 51.5824 80.9946 65.5956L80.6446 62.892C80.5194 61.9253 79.6358 61.242 78.6681 61.3686C77.7014 61.4937 77.0194 62.3789 77.1447 63.3452L78.1108 70.8051C78.2345 71.7613 79.1126 72.4493 80.0799 72.329C80.7589 72.2483 77.493 72.6639 87.5468 71.3624C88.5135 71.2373 89.1955 70.3521 89.0702 69.3858C88.9451 68.4194 88.0612 67.7372 87.0935 67.8627Z"
        fill="#032068"
      />
      <path
        d="M11.8824 19.1946C11.7799 18.4017 11.1596 17.7923 10.3959 17.6773C9.93662 17.6077 10.1034 17.6729 2.44657 18.6373C1.47994 18.7624 0.797937 19.6476 0.923221 20.6139C1.04815 21.5806 1.93379 22.2636 2.89971 22.1374L6.50348 21.6706C2.23853 28.6807 0 36.6688 0 44.9998C0 54.6665 3.01123 63.8728 8.70849 71.6237C9.28656 72.4101 10.3906 72.577 11.1753 72.0005C11.9606 71.4231 12.1291 70.3187 11.5521 69.5333C1.8685 56.3591 1.01851 38.4175 8.9984 24.4043L9.34849 27.1078C9.46354 27.9976 10.2225 28.6461 11.0961 28.6461C12.1667 28.6461 12.9847 27.7066 12.8483 26.6547L11.8824 19.1946Z"
        fill="#032068"
      />
    </svg>
  );
};

const Rect = () => {
  return (
    <svg
    className="absolute -z-10 top-3"
      width="221"
      height="17"
      viewBox="0 0 221 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.499023" width="220" height="16" fill="#FFEF9F" />
    </svg>
  );
};

export default Title3;