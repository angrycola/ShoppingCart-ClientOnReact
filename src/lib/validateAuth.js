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
