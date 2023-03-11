const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePhoneNumber(phoneNumber) {
  // Regular expression pattern to match a valid phone number with country code
  const pattern = /^\+\d{1,3}\d{3}\d{3}\d{3}$/;

  // Test the phone number against the pattern
  return pattern.test(`+${phoneNumber}`);
}

export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "This field is required";
  }
  if (/[^a-zA-Z\s]/g.test(values.name) === true) {
    errors.name = "Name invalid";
  }
  if (!values.email) {
    errors.email = "This field is required";
  }
  if (!validateEmail(values.email)) {
    errors.email = "Invalid email";
  }
  if (!values.phone) {
    errors.phone = "This field is required";
  }
  if (values.phone && !validatePhoneNumber(values.phone)) {
    errors.phone = "Invalid phone number";
  }
  return errors;
};
