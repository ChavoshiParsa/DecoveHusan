const CompanyGoal = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <h1 className="text-2xl font-extrabold text-blue-zodiac">
        هدف ما در دکووی
      </h1>
      <DeviderIcon />
      <p className="text-center text-base font-medium leading-10 text-dusty-gray">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده
      </p>
    </div>
  );
};

const DeviderIcon = () => {
  return (
    <svg
      width="100"
      height="13"
      viewBox="0 0 100 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="5.90421"
        x2="99"
        y2="5.90421"
        stroke="#2BEE84"
        stroke-width="2"
        stroke-linecap="round"
      />
      <circle
        cx="49.5"
        cy="6.90421"
        r="5"
        fill="#2BEE84"
        stroke="#032068"
        stroke-width="2"
      />
    </svg>
  );
};

export default CompanyGoal;
