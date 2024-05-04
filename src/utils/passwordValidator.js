export const passwordValidator = (password) => {
  if (password && password.length < 8) {
    return "Password is too short";
  }

  if (password && !/[A-Z]/.test(password)) {
    return "Password should contain at least one uppercase";
  }

  if (password && !/\d/.test(password)) {
    return "Password should contain at least one number";
  }

  if (password && !/[@$!%*?&]/.test(password)) {
    return "Password should contain at least one special character ";
  }
};

export const checkPasswordValidator = (password) => {
  return passwordValidator(password);
};

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
