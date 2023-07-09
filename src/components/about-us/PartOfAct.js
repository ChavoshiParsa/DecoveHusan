import Act1 from "../../assets/HandOnPC.png";
import Act2 from "../../assets/Laptop.png";

const PartOfAct = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="mb-3 text-[22px] font-medium text-dusty-gray">
        از فعالیت های دکووی برایتان بگوییم
      </h2>
      <h1 className="mb-24 text-[26px] font-extrabold text-blue-zodiac">
        بخشی از فعالیت های دکووی
      </h1>
      <FirstAct />
      <SecondAct />
    </div>
  );
};

const FirstAct = () => {
  return (
    <div className="relative mx-20 mb-32 flex flex-row items-center justify-center space-x-14">
      <div className="flex flex-col items-end justify-center space-y-4 text-right">
        <h1 className="text-2xl font-extrabold text-blue-zodiac">
          لورم ایپسوم متن ساختگی با تولید
        </h1>
        <p className="text-right text-base font-medium leading-10 text-dusty-gray">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و
          <span className="text-spring-green"> برای شرایط فعلی </span> تکنولوژی
          مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
        </p>
      </div>
      <Ellipse pos="-right-52" />
      <div className="absolute right-0 h-[250px] w-[225px] rotate-12 bg-[#2BEE841A]" />
      <img
        src={Act1}
        alt="Hand On Laptop"
        className="z-20 h-[250px] w-[225px] rounded-xl"
      />
    </div>
  );
};

const SecondAct = () => {
  return (
    <div className="relative mx-20 flex flex-row-reverse items-center space-x-14 space-x-reverse">
      <div className="flex flex-col items-end justify-center space-y-4 text-right">
        <h1 className="text-2xl font-extrabold text-blue-zodiac">
          لورم ایپسوم متن ساختگی با تولید
        </h1>
        <p className="text-right text-base font-medium leading-10 text-dusty-gray">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و
          <span className="text-spring-green"> برای شرایط فعلی </span> تکنولوژی
          مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
        </p>
      </div>
      <Ellipse pos="-left-48" />
      <div className="absolute left-0 h-[250px] w-[225px] rotate-12 bg-[#2BEE841A]" />
      <img
        src={Act2}
        alt="Laptop"
        className="z-20 h-[250px] w-[225px] rounded-xl"
      />
    </div>
  );
};

const Ellipse = (props) => {
  return (
    <div
      className={`absolute z-10 h-[360px] w-[360px] overflow-hidden rounded-full border-2 border-[#2BEE8433] ${props.pos}`}
    />
  );
};

export default PartOfAct;
