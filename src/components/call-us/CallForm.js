import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const CallForm = () => {
  const phoneRegExp = /^09[0-9]{9}$/;

  const formik = useFormik({
    initialValues: {
      phone: "",
      subject: "",
      content: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .trim()
        .required("لطفا یک شماره تلفن وارد کنید")
        .matches(phoneRegExp, "لطفا یک شماره تلفن معتبر وارد کنید"),
      subject: Yup.string().trim().required("لطفا موضوع خود را انتخاب کنید"),
      content: Yup.string().trim().required("لطفا پیام خود را وارد کنید"),
    }),
    onSubmit: (values) => {
      const phone = values.phone;
      const subject = values.subject;
      const content = values.content;

      let string =
        "شماره شما: " +
        phone +
        "\n" +
        "موضوع شما: " +
        subject +
        "\n" +
        "متن شما: " +
        content;
      alert(string);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex max-w-[500px] flex-col items-start justify-center"
      dir="rtl"
    >
      <h2 className="text-[26px] font-extrabold text-blue-zodiac">
        ارسال فرم تماس با ما
      </h2>
      <p className="mb-10 mt-3 text-base font-medium leading-10 text-dusty-gray">
        کــاربر گرامـی ، لطفـــــاً در صورت وجود هرگونه سوال یـا ابهامی ، پیش از
        ارســــال ایمیل یا تماس تلفنی ،
        <span className="text-spring-green">
          <Link to="/FAQ">پرسش هـــای متداول </Link>
        </span>
        بخش را ملاحظه فرمایید.
      </p>
      <input
        className="h-14 w-full rounded bg-[#F5F5F5] px-4 text-[22px] font-medium outline-none placeholder:text-dusty-gray"
        name="phone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone.trim()}
        type="tel"
        pattern="09[0-9]{9}"
        placeholder="شماره موبایل *"
      />
      <div className="mb-8">
        {formik.touched.phone && formik.errors.phone && (
          <p className="-mb-6 mr-3 mt-1 text-xs font-bold text-rose-500 md:text-sm">
            {formik.errors.phone}
          </p>
        )}
      </div>
      <select
        className="h-14 w-full rounded bg-[#F5F5F5] px-4 text-[22px] font-medium text-dusty-gray outline-none"
        id="mySelect"
      >
        <option value="" disabled selected>
          دسته بندی *
        </option>
      </select>
      <div className="mb-8">
        {formik.touched.phone && formik.errors.phone && (
          <p className="-mb-6 mr-3 mt-1 text-xs font-bold text-rose-500 md:text-sm">
            {/* {formik.errors.category} */}
          </p>
        )}
      </div>
      <input
        className="h-14 w-full rounded bg-[#F5F5F5] px-4 text-[22px] font-medium outline-none placeholder:text-dusty-gray"
        name="subject"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
        type="text"
        placeholder="موضوع *"
      />
      <div className="mb-8">
        {formik.touched.subject && formik.errors.subject && (
          <p className="-mb-6 mr-3 mt-1 text-xs font-bold text-rose-500 md:text-sm">
            {formik.errors.subject}
          </p>
        )}
      </div>
      <textarea
        className="h-[150px] w-full resize-none rounded bg-[#F5F5F5] px-4 pt-2 text-[22px] font-medium outline-none placeholder:text-dusty-gray"
        name="content"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
        type="text"
        placeholder="نوشتن پیام *"
      />
      <div className="mb-8">
        {formik.touched.content && formik.errors.content && (
          <p className="-mb-6 mr-3 mt-1 text-xs font-bold text-rose-500 md:text-sm">
            {formik.errors.content}
          </p>
        )}
      </div>
      <button
        className="rounded-md bg-spring-green px-6 py-3 text-base font-bold text-white"
        type="submit"
      >
        ارسال درخواست
      </button>
    </form>
  );
};

export default CallForm;
