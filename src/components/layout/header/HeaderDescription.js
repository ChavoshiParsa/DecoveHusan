import SliderAction from "./SliderActions";

const HeaderDescription = (props) => {
  return (
    <div
      id="description"
      className="flex flex-col items-center text-center font-yekan md:items-end md:text-right lg:w-[700px]"
    >
      <h1 className="text-[52px] font-bold leading-[88px] text-spring-green -mb-2 md:mb-1 md:text-[80px]">
        دِکووی
      </h1>
      <h2 className="mb-4 text-[26px] font-bold leading-10 text-white md:mb-7 md:text-[52px] md:leading-[72px]">
        لورِم ایپسوم متنِ ساختِگی با تولید
      </h2>
      <p className="mb-4 text-sm text-white md:mb-8 md:text-lg">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و{" "}
        <span className="text-spring-green">مجله در ستون</span> و سطرآنچنان که
        لازم است، و برای شرایط فعلی تکنولوژی
      </p>
      <button className="mb-9 h-[42px] w-[170px] rounded-[5px] bg-spring-green text-sm text-white md:mb-32 md:h-[53px] md:w-[220px] md:text-base">
        نسخه ی نمایشی را امتحان کنید
      </button>
      <SliderAction />
    </div>
  );
};

export default HeaderDescription;
