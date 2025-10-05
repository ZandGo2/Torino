export const validate = (type, data) => {
  const error = {};
  if (type === "login") {
    if (!data || data.length !== 11) {
      error.mobile = "شماره تلفن صحیح نمی‌باشد";
    }
  }

  return error;
};
