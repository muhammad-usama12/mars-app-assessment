import * as Yup from "yup";

export const personalInfoSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  phoneNum: Yup.string().matches(
    /^\(\d{3}\)-\d{3}-\d{4}$/,
    "Invalid phone number format. Please use (123)-456-789"
  ),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export const travelPreferencesSchema = Yup.object().shape({});

export const healthSafetySchema = Yup.object().shape({});
