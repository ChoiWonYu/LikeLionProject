import {Routes,Route} from 'react-router-dom';
import ButtomNav from '../ButtomNav';
const ReservationHistory=()=>{
    return(
        <div>
            <div>
            ReservationHistory
            </div>
        <Routes>
            <Route path="/*" element={<ButtomNav/>}/>
        </Routes>
        </div>
    )
}

export default ReservationHistory;