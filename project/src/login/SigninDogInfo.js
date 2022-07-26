import arrow from '../img/arrow_prev.png';
import userInfobar from '../img/userInfobar.png';
import addDogimg from '../img/addDogPic.png';
import {useNavigate} from 'react-router-dom'
const SigninDogInfo=()=>{
    const navigate=useNavigate();
    const goPrev=()=>{
        navigate(-1);
    }
    const goToHome=()=>{
        navigate('/home');
    }
    return(
        <div>
           <img src={arrow} alt='arrow_prev' onClick={goPrev}/>
           <p>반려견 정보 입력</p>
           <img src={userInfobar} alt='userInfobar'/>
           <p>반려견 사진 등록</p>
           <img src={addDogimg} alt='addDogImg'></img>
           <form>
            <div>
                <p>이름</p>
                <input placeholder='반려견 사진 등록'></input>
            </div>
            <div>
                <p>나이</p>
                <input placeholder='반려견 이름'></input>
            </div>
            <div>
                <p>품종</p>
                <input placeholder='반려견 품종'></input>
            </div>
            <div>
                <p>몸무게</p>
                <input placeholder='반려견 몸무게'></input>
            </div>
            <p onClick={goToHome}>다음에 입력하기</p>
            <button>완료</button>
           </form>

        </div>
    )
}

export default SigninDogInfo;