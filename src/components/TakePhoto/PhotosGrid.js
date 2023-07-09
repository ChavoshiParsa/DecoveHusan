import {
  DUMMY_HOME_PART_DATA as homePartData,
  imp,
} from "../../assets/DummyData";
import PhotoItem from "./PhotoItem";

const PhotosGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-x-6 gap-y-10 mb-24" dir="rtl">
      {homePartData.map((item, index) => (
        <PhotoItem
          src={imp(`take-photo/TakePhoto${(index % 4) + 1}.png`)}
          name={item.name}
          info={item.info}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default PhotosGrid;
