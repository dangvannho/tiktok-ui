import * as httpRequest from "~/utils/httpRequest";

const searchApi = async (q, type = "less") => {
  try {
    const res = await httpRequest.get("users/search", {
      params: { q, type },
    });
    return res.data;
  } catch (error) {
    console.log("lỗi");
  }
};

export default searchApi;
