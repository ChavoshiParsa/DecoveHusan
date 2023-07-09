import RoomVisualizer from "./RoomVisualizer";
import SlideBar from "./SlideBar";
import TopActionBar from "./TopActionBar";

const Container = () => {
  return (
    <div>
      <TopActionBar />
      <div className="flex flex-row justify-between items-start">
        <RoomVisualizer />
        <SlideBar/>
      </div>
    </div>
  );
};
export default Container;
