import { DUMMY_MATERIAL_NAMES as materialNames } from "../../assets/DummyData";

const Materials = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {materialNames.map((item, index) => (
        <MaterialItem key={"mn" + index} id={"mn" + index} name={item.name} />
      ))}
    </div>
  );
};

const MaterialItem = (props) => {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <h3 className="text-base font-bold text-dusty-gray">{props.name}</h3>
      <input type="checkbox" className="mr-auto accent-spring-green" />
    </div>
  );
};

export default Materials;
