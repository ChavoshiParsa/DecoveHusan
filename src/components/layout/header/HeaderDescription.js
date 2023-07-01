const HeaderDescription = (props) => {
  return (
    <div
      id="description"
      className="absolute left-[590px] top-[216px] flex h-[340px] w-[700px] flex-col items-end justify-between text-right font-yekan"
    >
      <h1 className="text-[80px] font-bold leading-[88px] text-spring-green">
        دِکووی
      </h1>
      <h2 className="text-[52px] font-bold leading-[72px] text-white">
        لورِم ایپسوم متنِ ساختِگی با تولید
      </h2>
      <p className="text-lg text-white">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و{" "}
        <span className="text-spring-green">مجله در ستون</span> و سطرآنچنان که
        لازم است، و برای شرایط فعلی تکنولوژی
      </p>
      <button className="h-[53px] w-[220px] rounded-[5px] bg-spring-green text-base text-white">
        نسخه ی نمایشی را امتحان کنید
      </button>
    </div>
  );
};

export default HeaderDescription;
