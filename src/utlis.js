const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePhoneNumber(phoneNumber) {
  // Remove any non-digit character from the input string
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Check if the cleaned phone number is a valid format for Nigeria or international format
  const isNigerianPhoneNumber = /^(?:\+234|0)[789][01]\d{8}$/.test(cleaned);
  const isInternationalPhoneNumber = /^\+(?:[0-9]●?){6,14}[0-9]$/.test(cleaned);
  const isValidPhoneNumber =
    isNigerianPhoneNumber || isInternationalPhoneNumber;

  return isValidPhoneNumber;
}

export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "This field is required";
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
