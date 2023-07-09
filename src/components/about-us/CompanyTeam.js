import { DUMMY_PERSON_DATA as personData, imp } from "../../assets/DummyData";

const CompanyTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="mb-3 text-[22px] font-medium text-dusty-gray">
        برخی از افرادی که به رشد دکووی کمک کرده اند
      </h2>
      <h1 className="mb-20 text-[26px] font-extrabold text-blue-zodiac">
        تیم دکووی
      </h1>
      <div className="grid grid-cols-4 gap-10" dir="rtl">
        {personData.map((item, index) => (
          <PersonItem
            src={imp(`employee/Person${(index % 4) + 1}.png`)}
            id={item.id}
            key={item.id}
            fullName={item.name}
            post={item.post}
          />
        ))}
      </div>
    </div>
  );
};

const PersonItem = (props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <img src={props.src} alt="Employee" className="rounded-xl" />
      <span className="text-xl font-black text-blue-zodiac">
        {props.fullName}
      </span>
      <span className="text-base font-medium text-dusty-gray">
        {props.post}
      </span>
    </div>
  );
};

export default CompanyTeam;
