import { toast } from "react-toastify";

function validateName(name) {
  return name.trim().length >= 3;
}

const validateEmail = (email) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
};

const validatePassword = (password) => {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pattern.test(password);
};

const validatePhoneNumber = (phoneNumber) => {
  const pattern = /^\d{10}$/;
  return pattern.test(phoneNumber);
};

const validateAddress = (address) => {
  return address.trim().length >= 1;
};
const validateRole = (role) => {
  return role === "buyer" || role === "seller";
};

export const validateLogin = ({ email, password }) => {
  if (!validateEmail(email)) {
    toast.error("Please enter a valid email address");
    return false;
  }
  if (!password) {
    toast.error("Enter password");
    return false;
  }

  return true;
};
export const validateSignUp = ({
  name,
  email,
  phone,
  address,
  password,
  role,
}) => {
  if (!validateName(name)) {
    toast.error(
      "Name must contain at least 3 letters and can only contain letters and spaces"
    );
    return false;
  }
  if (!validateEmail(email)) {
    toast.error("Please enter a valid email address");
    return false;
  }
  if (!validateRole(role)) {
    toast.error("Please enter a valid role (Buyer / Seller)");
    return false;
  }
  if (!validatePhoneNumber(phone)) {
    toast.error("Please enter a 10-digit phone number");
    return false;
  }
  if (!validateAddress(address)) {
    toast.error("Enter address");
    return false;
  }
  if (!validatePassword(password)) {
    toast.error(
      "Password must be at least 8 characters long, and contain at least one lowercase letter, one uppercase letter, one digit, and one special symbol"
    );
    return false;
  }
  return true;
};
