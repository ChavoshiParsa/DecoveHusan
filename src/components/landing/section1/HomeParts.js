import bathroom from "../../../assets/Bathroom.png";
import livingRoom from "../../../assets/LivingRoom.png";
import kitchen from "../../../assets/Kitchen.png";
import { useState } from "react";

const HomeParts = () => {
  return (
    <div className="mx-3 flex flex-col flex-wrap items-center justify-center space-x-0 space-y-5 md:flex-row md:space-x-7 md:space-y-0">
      <Part img={bathroom} name={"حمام - دستشویی"} />
      <Part img={livingRoom} name={"اتاق پذیرایی"} />
      <Part img={kitchen} name={"آشپزخانه"} />
    </div>
  );
};

const Part = (props) => {
  const [isHover, setIsHover] = useState(false);
  const enterHandler = () => {
    setIsHover(true);
  };
  const leaveHandler = () => {
    setIsHover(false);
  };

  const tryNowHandler = () => {};

  return (
    <div className="flex flex-col items-center justify-between font-yekan">
      <button
        className="relative mb-5 overflow-hidden"
        onClick={tryNowHandler}
        onMouseEnter={enterHandler}
        onMouseLeave={leaveHandler}
      >
        <div
          className={`absolute inset-0 z-10 flex h-[200px] w-[363px] items-center justify-center rounded-md bg-[#2bee83a5] transition duration-[400ms] ${
            isHover ? "translate-y-0" : "translate-y-72"
          }`}
        >
          <HoverIcon />
        </div>
        <img
          className="h-[200px] w-[363px]"
          src={props.img}
          alt="Part of home"
        />
      </button>
      <h3 className="mb-2 text-2xl font-bold text-blue-zodiac">{props.name}</h3>
      <h4 className="text-lg text-dusty-gray">۱۲۰۰ محصول مرتبط</h4>
    </div>
  );
};

const HoverIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width="81"
        height="80"
        viewBox="0 0 81 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_136_111)">
          <path
            d="M75.3006 31.7638L61.6279 16.7383C58.9225 14.0329 54.5152 14.0293 51.7843 16.7602C50.9189 17.6256 50.3298 18.6619 50.0244 19.7675C47.3044 17.6839 43.3807 17.8911 40.8752 20.3966C40.0134 21.262 39.4243 22.2984 39.1115 23.4002C36.3916 21.3239 32.4679 21.5274 29.9661 24.033C29.1188 24.8803 28.537 25.8911 28.2207 26.9675L21.777 20.5238C19.0715 17.8183 14.6642 17.8148 11.9334 20.5456C9.22435 23.2511 9.22435 27.6584 11.9334 30.3674L36.6897 55.1237L22.0061 57.4291C18.0387 57.9964 15.0461 61.4437 15.0461 65.4546C15.0461 68.462 17.4933 70.9092 20.5006 70.9092H54.7879C60.1298 70.9092 65.1515 68.8291 68.9297 65.051L74.6496 59.331C78.4242 55.5601 80.5005 50.5419 80.5005 45.2073C80.5005 40.2255 78.6533 35.451 75.3006 31.7638ZM72.0787 56.7601L66.3587 62.48C63.2679 65.5709 59.1587 67.2727 54.7877 67.2727H20.5004C19.4968 67.2727 18.6822 66.4581 18.6822 65.4545C18.6822 63.2435 20.3331 61.3417 22.5476 61.0254L40.784 58.1599C41.4604 58.0543 42.0168 57.5781 42.2314 56.9271C42.4422 56.2799 42.2714 55.5635 41.7877 55.0799L14.5042 27.7964C13.2133 26.5056 13.2133 24.4037 14.5224 23.091C15.1696 22.4474 16.017 22.1237 16.8643 22.1237C17.7116 22.1237 18.5588 22.4474 19.2062 23.0946L37.399 41.2874C38.1081 41.9965 39.2609 41.9965 39.9699 41.2874C40.3226 40.931 40.5009 40.4656 40.5009 40.0001C40.5009 39.5346 40.3228 39.0693 39.9664 38.7128L32.5373 31.2838C31.2464 29.9929 31.2464 27.8946 32.5591 26.5819C33.8464 25.2947 35.9518 25.2947 37.2391 26.5819L44.6718 34.0146C45.3809 34.7237 46.5336 34.7237 47.2427 34.0146C47.5954 33.6582 47.7737 33.1928 47.7737 32.7273C47.7737 32.2618 47.5956 31.7965 47.2392 31.4401L43.4464 27.6473C42.1555 26.3564 42.1555 24.2581 43.4682 22.9455C44.7555 21.6582 46.8609 21.6582 48.1482 22.9455L51.959 26.7563C51.9664 26.7599 51.9626 26.7599 51.9626 26.7599L51.9662 26.7635C51.9698 26.767 51.9698 26.767 51.9698 26.767C51.9734 26.7706 51.9734 26.7706 51.9734 26.7706H51.9769C51.9805 26.7706 51.9805 26.7742 51.9805 26.7742C52.6932 27.4506 53.8206 27.4361 54.515 26.7379C55.2241 26.0288 55.2241 24.876 54.515 24.1669L54.3587 24.0106C53.7333 23.3852 53.3878 22.5524 53.3878 21.6687C53.3878 20.7851 53.7296 19.956 54.3769 19.3088C55.6715 18.0215 57.7661 18.0251 58.9988 19.2469L72.6134 34.2106C75.3514 37.2255 76.8642 41.1309 76.8642 45.2073C76.8642 49.571 75.1659 53.6728 72.0787 56.7601Z"
            fill="white"
          />
          <path
            d="M31.7586 18.7383C29.1115 12.8801 23.2642 9.09088 16.8641 9.09088C7.84231 9.09088 0.500488 16.4327 0.500488 25.4545C0.500488 31.8546 4.28953 37.7019 10.1477 40.3528C10.3913 40.4619 10.646 40.5128 10.8969 40.5128C11.5877 40.5128 12.2496 40.1128 12.555 39.4437C12.966 38.5274 12.5586 37.451 11.646 37.0364C7.086 34.9746 4.13697 30.4291 4.13697 25.4545C4.13697 18.4364 9.84601 12.7272 16.8643 12.7272C21.8389 12.7272 26.3844 15.6762 28.4462 20.2362C28.8572 21.1526 29.9372 21.5636 30.8498 21.1453C31.766 20.7309 32.1732 19.6546 31.7586 18.7383Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_136_111">
            <rect
              width="80"
              height="80"
              fill="white"
              transform="translate(0.500488)"
            />
          </clipPath>
        </defs>
      </svg>
      <h3 className="text-center font-yekan text-lg font-semibold text-white">
        همین الان امتحان کن
      </h3>
    </div>
  );
};

export default HomeParts;
