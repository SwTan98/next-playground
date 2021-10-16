import axios from "axios";

export const fetchImages = async () => {
  const result = await axios.get("https://picsum.photos/v2/list");
  return result.data;
};
