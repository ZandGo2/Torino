import axios from "axios";

export const getTourDetails = async (id) => {
  const res = await axios.get(`http://localhost:6500/tour/${id}`);
  return res.data;
};
