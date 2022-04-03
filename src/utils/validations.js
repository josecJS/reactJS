export const validations = {
  isEmpty: (value) => !value || value.length === 0,
  email: (value) => {
    const re = /\S+@\S+\.\S+/;
    return value && re.test(value);
  },
  minLength: (value, minLength) => value && value.length >= minLength
};