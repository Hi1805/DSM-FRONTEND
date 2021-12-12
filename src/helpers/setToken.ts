export const setToken = ({ key = "", value = "" }) => {
  return localStorage.setItem(key, value);
};
