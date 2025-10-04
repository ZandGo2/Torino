import axios from "axios";

export const getTourList = async () => {
  const res = await axios.get("http://localhost:6500/tour");
  return res.data;
};
