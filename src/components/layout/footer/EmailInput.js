import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";

const EmailInput = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .email("لطفا یک ایمیل معتبر وارد کنید")
        .required("ابتدا ایمیل خود را وارد کنید "),
    }),
    onSubmit: (values) => {
      alert(`ایمیل شما به نشانی ${values.email} ثبت شد`);
    },
  });

  const emailRef = useRef(null);
  const handleInvalidEmail = () => {
    emailRef.current.setCustomValidity("ایمیل شما باید حاوی کارکتر @ باشد");
  };

  return (
    <form
      className="flex flex-row-reverse items-center justify-center font-yekan font-bold"
      onSubmit={formik.handleSubmit}
    >
      <div className="relative">
        <input
          className="h-[40px] w-[320px] rounded-br-md rounded-tr-md border-b border-r border-t border-[#E4E4E7] pr-2 md:pr-5 text-center text-xs md:text-sm leading-9 outline-none md:h-[56px] md:w-[451px]"
          placeholder="برای اطلاع از جدیدترین اخبار و محصولات هوسان ایمیل خود را وارد کنید"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email.trim()}
          onInvalid={handleInvalidEmail}
          ref={emailRef}
        />
        {!formik.values.email && <EmailIcon />}
      </div>
      <button
        className="rounded-bl-md rounded-tl-md bg-spring-green md:px-4 py-2.5 px-1 whitespace-nowrap md:py-4 text-center text-sm md:text-base text-white"
        type="submit"
      >
        ثبت ایمیل
      </button>
      {formik.touched.email && formik.errors.email && (
        <p className="mr-5 text-xs md:text-sm font-bold text-rose-400">
          {formik.errors.email}
        </p>
      )}
    </form>
  );
};

const EmailIcon = () => {
  return (
    <svg
      className="absolute right-7 top-4 hidden md:block"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2867 3.36179C18.0871 3.01364 17.853 2.72063 17.5813 2.4716C16.9802 1.92058 16.1308 1.52524 14.8869 1.27183C13.6379 1.01737 12.0432 0.916178 10 0.916178C7.29925 0.916178 5.39688 1.0941 4.04614 1.55548C2.92191 1.93949 2.19339 2.51396 1.7031 3.37976C1.83014 3.51873 1.99184 3.69198 2.18366 3.89017C2.69989 4.42354 3.42977 5.1329 4.28607 5.84C5.14454 6.54887 6.11531 7.24315 7.11302 7.75704C8.11639 8.27384 9.10058 8.58405 9.99899 8.58285C10.8956 8.58164 11.8773 8.27008 12.8779 7.75276C13.8729 7.23837 14.8407 6.54442 15.6963 5.83625C16.5499 5.12986 17.2773 4.42156 17.7917 3.88908C17.9911 3.68267 18.1578 3.50339 18.2867 3.36179ZM3.33099 6.99663C2.4282 6.25116 1.66236 5.50757 1.11992 4.94793C0.859298 6.05451 0.75 7.48114 0.75 9.33284C0.75 13.1275 1.21601 15.0917 2.41867 16.1941C3.01977 16.7451 3.86918 17.1404 5.11308 17.3939C6.36212 17.6483 7.9568 17.7495 10 17.7495C12.0432 17.7495 13.6379 17.6483 14.8869 17.3939C16.1308 17.1404 16.9802 16.7451 17.5813 16.1941C18.784 15.0917 19.25 13.1275 19.25 9.33284C19.25 7.45501 19.1359 6.02545 18.8748 4.92675C18.8734 4.92825 18.8719 4.92976 18.8705 4.93126C18.3291 5.49164 17.5604 6.2406 16.6527 6.99184C15.7471 7.74129 14.6884 8.50532 13.5668 9.08521C12.4509 9.66218 11.226 10.0812 10.001 10.0828C8.77335 10.0845 7.54529 9.66696 6.42617 9.09054C5.30139 8.51121 4.23946 7.7468 3.33099 6.99663Z"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EmailInput;
