import * as Yup from "yup";

export const OTPSchema = () =>
  Yup.object().shape({
    OTP: Yup.string().required("Vui lòng nhập OTP"),
  });
