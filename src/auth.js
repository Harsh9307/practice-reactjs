import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export const saveUser = (email, password) => {
  const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);
  localStorage.setItem("user", JSON.stringify({ email, password: hashedPassword }));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const authenticateUser = (email, password) => {
  const user = getUser();
  if (!user || user.email !== email) return false;
  return bcrypt.compareSync(password, user.password);
};

export const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

export const loginUser = () => {
  localStorage.setItem("auth", "true");
};

export const logoutUser = () => {
  localStorage.removeItem("auth");
};
