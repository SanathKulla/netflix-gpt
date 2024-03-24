export const validateForm = (email, password, userName) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (userName !== undefined) {
    const isUserNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userName);
    if (userName.length === 0) return "Enter Username";
    if (!isUserNameValid) return "Invalid UserName";
  }
  if (email.length === 0) return "Enter Email Address";
  if (password.length === 0) return "Enter Password";
  if (!isEmailValid) return "Invalid Email";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};
