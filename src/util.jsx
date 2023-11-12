export const isValidEmail = (email) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export const isEmptyString = (str) => {
  return typeof str === "string" && str.length === 0;
};

export const isValidUsername = (username) => {
  return /^[a-zA-Z0-9]+$/.test(username);
};

export const isValidFirstLastName = (name) => {
  // regex from https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
  return /^[a-z ,.'-]+$/i.test(name);
};

export const isValidPassword = (password) => {
  return !isEmptyString(password);
};

export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};
