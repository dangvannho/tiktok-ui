import { httpRequestAccount } from "~/utils/httpRequest";

const accountApi = async () => {
  try {
    const res = await httpRequestAccount.get("/users");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default accountApi;
