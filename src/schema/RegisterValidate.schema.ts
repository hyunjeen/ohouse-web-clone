import * as yup from "yup";

export const RegisterValidateSchema = yup.object().shape({
  name: yup.string().required("이름은 반드시 필수로 입력하세요."),
  email: yup
    .string()
    .email("이메일 형식이 아닙니다")
    .required("이메일은 반드시 필수로 입력하세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 적어도 8자리입니다!")
    .max(16, "비밀번호는 최대 16자리입니다!")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}[^\s]*$/,
      "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함한 8자리 이상 입력해주세요"
    )
    // .matches(regexPasswd, '비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요.')
    .required("비밀번호를 입력해주세요"),
  password1: yup
    .string()
    .oneOf([yup.ref("pw"), undefined], "비밀번호가 일치하지 않습니다")
    .required("비밀번호를 한번 더 입력해주세요"),
});
