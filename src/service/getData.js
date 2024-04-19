import apiCalls from "./apiCalls";

const exportedApi = apiCalls;

export const getData = async ({ email, password }) => {
  let data = await exportedApi.getToken({ email, password });
  return data;
};
