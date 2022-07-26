import styled from "styled-components";

export const LoginStyled = styled.div`
  text-align: center;
`;

export const LogoStyled = styled.div`
  margin-top: 151px;
  margin-bottom: 104px;
`;
export const FormStyled = styled.form``;

export const InputStyled = styled.input`
  display: block;
  width: 360px;
  height: 56px;
  margin: 0 auto;
  margin-top: 12px;
  border-radius: 30px;
  border: 1px solid #dddddd;
  padding: 28px;
  font-size: 18px;
  &::placeholder {
    color: #dddddd;
  }
  &:focus {
    outline-color: #848484;
  }
`;

export const ForgotPassword = styled.p`
  position: absolute;
  right: 39px;
  display: inline;
  font-size: 14px;
  color: #848484;
  margin-top: 15px;
`;

export const LoginBtn = styled.button`
  display: block;
  width: 360px;
  height: 56px;
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  margin-top: 63px;
  border-radius: 28px/28px;
  background-color: #ffa724;
  color: white;
  border: 0;
`;
// InputStyled이랑 겹치는데 어떻게 해결...?

export const SignInEmail = styled.p`
  margin-top: 30px;
  margin-bottom: 50px;
  color: #848484;
  font-size: 16px;
`;

export const HrStyled = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #848484;
  font-size: 16px;
  margin: 8px 0px;
  margin-bottom: 0;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: #f6f6f6;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

export const SimpleLoginKaKao = styled.img`
  margin-top: 60px;
  margin-right: 30px;
`;

export const SimpleLoginNaver = styled.img`
  margin-top: 60px;
`;

export const GoToHome = styled.div`
  margin-top: 28px;
  position: relative;
  font-size: 16px;
  color: #848484;
`;

export const ArrowStyled = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 12px;
`;
