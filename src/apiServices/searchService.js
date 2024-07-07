import request from "~/utils/request";

function seacrhService(q, type = "less") {
  return request.get("users/search", {
    params: {
      q,
      type,
    },
  });
}

export { seacrhService };
