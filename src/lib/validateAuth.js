import validator from 'validator';


export const validateSignUp = (email, password, confirmation) => {

  const errors = {};
  if (!validator.isEmail(email)) {
    errors.invalidEmail = 'Email must be valid';
  }

  if (!validator.isLength(password, { min: 3 })) {
    errors.passwordLength = 'Must be 8+ characters';
  }
  if (!validator.equals(password, confirmation)) {
    errors.confirmation = 'Password must match its confirmation';
  }

  return  {
    email, password, errors,
    valid: Object.getOwnPropertyNames(errors).length > 0 ? false : true
  };
};

export const validateSignIn = (email, password) => {
  const errors = {};
  if (!validator.isEmail(email)) {
    errors.invalidEmail = ' must be valid';
  }

  if (validator.isEmpty(password)) {
    errors.passwordPresent = ' must be present';
  }
  return {
    email, password, errors,
    valid: Object.getOwnPropertyNames(errors).length > 0 ? false : true
  };
};
