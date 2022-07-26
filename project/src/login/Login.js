import logo from "../img/logo.png";
import kakao from "../img/kakao.png";
import naver from "../img/naver.png";
import arrow from "../img/arrow_next.png";
import {
  LoginStyled,
  FormStyled,
  LogoStyled,
  InputStyled,
  ForgotPassword,
  LoginBtn,
  SignInEmail,
  HrStyled,
  SimpleLoginKaKao,
  SimpleLoginNaver,
  GoToHome,
  ArrowStyled,
} from "../styles/LoginStlye";
const Login = () => {
  return (
    <LoginStyled>
      <LogoStyled>
        <img alt="logo" src={logo} />
      </LogoStyled>
      <FormStyled>
        <InputStyled type="text" placeholder="이메일" />
        <InputStyled type="text" placeholder="비밀번호" />

        <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        <LoginBtn>로그인</LoginBtn>
      </FormStyled>
      <SignInEmail>이메일로 회원가입</SignInEmail>
      <HrStyled>or</HrStyled>
      <SimpleLoginKaKao alt="kakao" src={kakao} />
      <SimpleLoginNaver alt="naver" src={naver} />
      <GoToHome>
        <span>어플 둘러보기</span>
        <ArrowStyled alt="arrow" src={arrow} />
      </GoToHome>
    </LoginStyled>
  );
};
export default Login;
