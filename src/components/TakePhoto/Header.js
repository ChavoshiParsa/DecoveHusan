const Header = () => {
  return (
    <div className="flex flex-col items-end justify-center space-y-8 bg-spring-green px-24 py-20 text-right font-yekan text-white">
      <h1 className="text-5xl font-semibold">فرش تاپ را در اتاق خود ببینید</h1>
      <p className="text-2xl">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه{" "}
      </p>
      <button className="px-6 py-3.5 text-[22px] border border-white rounded-md font-semibold">یک عکس آپلود کنید</button>
    </div>
  );
};

export default Header;
