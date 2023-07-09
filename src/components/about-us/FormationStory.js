import sofa from "../../assets/Sofa.png";

const FormationStory = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={sofa} alt="sofa" className="h-[350px]" />
      <div className="flex flex-col items-end justify-center space-y-4 ">
        <h1 className="text-2xl font-extrabold text-blue-zodiac">
          داستان شکل‌گیری دکووی
        </h1>
        <p
          className="ml-16 text-base font-medium leading-10 text-dusty-gray"
          dir="rtl"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </div>
  );
};

export default FormationStory;
