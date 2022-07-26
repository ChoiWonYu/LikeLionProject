import arrow from "../img/arrow_prev.png";
import userInfobar from "../img/userInfobar.png";
import { useNavigate } from "react-router-dom";
import {
  SigninStyled,
  TopWrap,
  SigninUserTitle,
  SigninBar,
  SigninUserInfoBox,
  EmailCheckBtn,
  SigninUserInfo,
  SigninUserInfoInput,
  SigninBottomBtn,
} from "../styles/SigninStyle";
const Signin = () => {
  const navigate = useNavigate();
  const toDogInfo = () => {
    navigate("/signin/doginfo");
  };
  const goPrev = () => {
    navigate(-1);
  };
  return (
    <SigninStyled>
      <TopWrap>
        <img src={arrow} alt="arrow_prev" onClick={goPrev} />
        <SigninUserTitle>회원가입</SigninUserTitle>
      </TopWrap>
      <SigninBar src={userInfobar} alt="userInfobar" />
      <form>
        <SigninUserInfoBox>
          <SigninUserInfo>아이디(이메일)</SigninUserInfo>
          <SigninUserInfoInput placeholder="이메일 주소"></SigninUserInfoInput>
          <EmailCheckBtn type="submit" value="중복확인" />
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>비밀번호</SigninUserInfo>
          <SigninUserInfoInput
            placeholder="6자 이상~14자 이하"
            pattern=".{6,14}"
            required
          ></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>비밀번호 확인</SigninUserInfo>
          <SigninUserInfoInput
            placeholder="비밀번호 확인"
            pattern=".{6,14}"
            required
          ></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>이름</SigninUserInfo>
          <SigninUserInfoInput placeholder="이름"></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>핸드폰 번호</SigninUserInfo>
          <SigninUserInfoInput placeholder="핸드폰 번호"></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninBottomBtn onClick={toDogInfo}>다음</SigninBottomBtn>
      </form>
    </SigninStyled>
  );
};
export default Signin;
