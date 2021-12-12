export const getUserToken = (): string => {
  return localStorage.getItem("us_tk") || "";
};
