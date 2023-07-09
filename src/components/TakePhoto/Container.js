import PhotosGrid from "./PhotosGrid";
import Title from "./Title";

const Container = () => {
  return (
    <div className="mx-36 flex flex-col items-end justify-center text-right font-yekan ">
      <h3 className="my-12 text-xl font-bold text-dusty-gray">
        سیستم بصری ساز دِکووی / خدمات واقعیت مجازی
      </h3>
      <Title />
      <PhotosGrid />
    </div>
  );
};

export default Container;
