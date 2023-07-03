import bathroom from "../../../assets/Bathroom.png";
import livingRoom from "../../../assets/LivingRoom.png";
import kitchen from "../../../assets/Kitchen.png";

const HomeParts = () => {
  return (
    <div className="flex items-center justify-center space-y-5 md:space-x-7 space-x-0 md:flex-row flex-col md:space-y-0 flex-wrap mx-3">
      <Part img={bathroom} name={"حمام - دستشویی"} />
      <Part img={livingRoom} name={"اتاق پذیرایی"} />
      <Part img={kitchen} name={"آشپزخانه"} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div className="flex flex-col items-center justify-between font-yekan">
      <img className="h-[200px] w-[363px] mb-5" src={props.img} alt="Part of home" />
      <h3 className="text-2xl font-bold text-blue-zodiac mb-2">{props.name}</h3>
      <h4 className="text-lg text-dusty-gray">۱۲۰۰ محصول مرتبط</h4>
    </div>
  );
};

export default HomeParts;
