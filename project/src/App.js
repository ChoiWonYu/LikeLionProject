import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import ReservationHistory from './pages/ReservationHistory';
import Map from './pages/Map';
import MyPage from './pages/Mypage';
import Signin from './login/Signin';
import Login from './login/Login';
import SigninDogInfo from './login/SigninDogInfo';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signin/doginfo' element={<SigninDogInfo/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/reservationHistory' element={<ReservationHistory/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
