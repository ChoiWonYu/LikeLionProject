import {Routes,Route} from 'react-router-dom';
import ButtomNav from '../ButtomNav';
const MyPage=()=>{
    return(
        <div>
            <div>
            MyPage
            </div>
        <Routes>
            <Route path="/*" element={<ButtomNav/>}/>
        </Routes>
        </div>
    )
}

export default MyPage;