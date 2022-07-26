import arrow from '../img/arrow_prev.png';
import userInfobar from '../img/userInfobar.png';
import {useNavigate} from 'react-router-dom'
const Signin=()=>{
    const navigate=useNavigate();
    const toDogInfo=()=>{
        navigate('/signin/doginfo');
    }
    const goPrev=()=>{
        navigate(-1);
    }
    return(
        <div>
           <img src={arrow} alt='arrow_prev' onClick={goPrev}/>
           <p>회원가입</p>
           <img src={userInfobar} alt='userInfobar'/>
           <form>
            <div>
                <p>아이디(이메일)</p>
                <input placeholder=''></input>
            </div>
            <div>
                <p>비밀번호</p>
                <input placeholder='6자 이상~14자 이하' pattern=".{6,14}" required></input>
            </div>
            <div>
                <p>비밀번호 확인</p>
                <input placeholder='비밀번호 확인' pattern=".{6,14}" required ></input>
            </div>
            <div>
                <p>이름</p>
                <input placeholder='이름'></input>
            </div>
            <div>
                <p>핸드폰 번호</p>
                <input placeholder='핸드폰 번호'></input>
            </div>
            <button onClick={toDogInfo}>다음</button>
           </form>

        </div>
    )
}
export default Signin;