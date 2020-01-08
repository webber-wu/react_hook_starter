import r from "superagent";

const xApiKey = "84w4ckgcgcw4wkksc4wk44g4440k40o0ocgs0w08";

const API = path => {
  let apiPath =
    process.env.NODE_ENV == "development"
      ? "" // 測試機 API 網址
      : ""; // 正式機 API 網址
  return apiPath + path;
};

export const formRequest = (method, path, data) =>
  r[method](API(path))
    .type("form")
    .set("X-API-Key", xApiKey)
    .send(data);

export const queryRequest = (method, path, data) =>
  r[method](API(path))
    .set("X-API-Key", xApiKey)
    .query(data);
