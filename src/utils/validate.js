export const validate = (type, data) => {
  const errors = {};

  if (type === "login") {
    if (!data) {
      errors.mobile = "شماره موبایل الزامی است";
    } else if (!/^09\d{9}$/.test(data)) {
      errors.mobile = "شماره موبایل معتبر نیست";
    }
  }

  return errors;
};
