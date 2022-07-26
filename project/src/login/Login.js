import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import kakao from '../img/kakao.png';
import naver from '../img/naver.png';
import arrow from '../img/arrow_next.png';
import { LoginStyled,FormStyled,LogoStyled,InputStyled,ForgotPassword,LoginBtn,SignInEmail,HrStyled,SimpleLoginImg,GoToHome,ArrowStyled} from '../styles/LoginStlye';

const Login=()=>{
    const navigate=useNavigate();
    const goToHome=()=>{
        navigate("/home");
    }
    const gotoSignIn=()=>{
        navigate('/signin');
    }
    return(
        <LoginStyled>
            <LogoStyled>
                <img alt="logo" src={logo}/>
            </LogoStyled>
            <FormStyled>
                
                <InputStyled type="text"/>
                <InputStyled type="text"/>
                
                <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
                <LoginBtn>로그인</LoginBtn>
            </FormStyled>
            
            <SignInEmail onClick={gotoSignIn}>이메일로 회원가입</SignInEmail>
            
            <HrStyled/>or<HrStyled/>
            
            <SimpleLoginImg alt="kakao" src={kakao}/><SimpleLoginImg alt='naver' src={naver}/>
            
            <GoToHome onClick={goToHome}>
            <span>어플 둘러보기</span><ArrowStyled alt="arrow" src={arrow}/>
            </GoToHome>
        </LoginStyled>
    )
}
export default Login;