import arrow from "../img/arrow_prev.png";
import petInfobar from "../img/petInfobar.png";
import { useNavigate } from "react-router-dom";
import {
  TopWrap,
  SigninPetTitle,
  SigninStyled,
  SigninBar,
  SigninPetimg,
  SigninPetimgBtn,
  SigninUserInfoBox,
  SigninUserInfo,
  SigninUserInfoInput,
  SigninBottomBtn,
  NextSigninPetBtn,
} from "../styles/SigninStyle";
const SigninDogInfo = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate(-1);
  };
  const goToHome = () => {
    navigate("/home");
  };
  return (
    <SigninStyled>
      <TopWrap>
        <img src={arrow} alt="arrow_prev" onClick={goPrev} />
        <SigninPetTitle>반려견 정보 입력</SigninPetTitle>
      </TopWrap>
      <SigninBar src={petInfobar} alt="petInfobar" />
      <SigninPetimg>반려견 사진 등록</SigninPetimg>
      <SigninPetimgBtn>사진 추가하기</SigninPetimgBtn>
      <form>
        <SigninUserInfoBox>
          <SigninUserInfo>이름</SigninUserInfo>
          <SigninUserInfoInput placeholder="반려견 사진 등록"></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>나이</SigninUserInfo>
          <SigninUserInfoInput placeholder="반려견 이름"></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>품종</SigninUserInfo>
          <SigninUserInfoInput placeholder="반려견 품종"></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>몸무게</SigninUserInfo>
          <SigninUserInfoInput placeholder="반려견 몸무게"></SigninUserInfoInput>
        </SigninUserInfoBox>
        <NextSigninPetBtn onClick={goToHome}>다음에 입력하기</NextSigninPetBtn>
        <SigninBottomBtn>완료</SigninBottomBtn>
      </form>
    </SigninStyled>
  );
};

export default SigninDogInfo;
