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
      <hr/>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/map'>Map</Link>
        </li>
        <li>
        <Link to='/reservationHistory'>reservationHistory</Link>
        </li>
        <li>
        <Link to='/mypage'>mypage</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
