import * as request from "~/utils/request";

const searchApi = async (q, type = "less") => {
  try {
    const res = await request.get("users/search", {
      params: { q, type },
    });
    return res.data;
  } catch (error) {
    console.log("lỗi");
  }
};

export default searchApi;
