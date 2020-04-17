const validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function loginInputValid(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';

  if (!validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 40 characters';
  }

  if (validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email not valid';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email cannot be empty';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
