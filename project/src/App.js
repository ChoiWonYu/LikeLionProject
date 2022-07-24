import {Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home'
import ReservationHistory from './pages/ReservationHistory';
import Map from './pages/Map';
import MyPage from './pages/Mypage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/reservationHistory' element={<ReservationHistory/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
