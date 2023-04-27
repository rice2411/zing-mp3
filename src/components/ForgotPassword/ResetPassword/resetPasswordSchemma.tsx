import * as Yup from "yup";

export const resetPasswordSchema = () =>
  Yup.object().shape({
    password: Yup.string()
      .required("Vui lòng nhập mật khẩu!")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự!"),
    confirmPassword: Yup.string()
      .required("Vui lòng nhập lại mật khẩu!")
      .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không trùng khớp!"),
  });
