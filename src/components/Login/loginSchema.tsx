import * as Yup from "yup";

export const loginSchema = () =>
  Yup.object().shape({
    username: Yup.string().required("Tên đăng nhập là bắt buộc"),
    password: Yup.string().required("Mật khẩu là bắt buộc"),
  });
