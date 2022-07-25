import {Routes,Route} from 'react-router-dom';
import ButtomNav from '../ButtomNav';
const Map=()=>{
    return(
        <div>
            <div>
            Map
            </div>
        <Routes>
            <Route path="/*" element={<ButtomNav/>}/>
        </Routes>
        </div>
    )
}

export default Map;