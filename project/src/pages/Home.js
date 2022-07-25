import {Routes,Route} from 'react-router-dom';
import ButtomNav from '../ButtomNav';
const Home=()=>{
    return(
        <div>
            <div>
            Home
            </div>
        <Routes>
            <Route path="/*" element={<ButtomNav/>}/>
        </Routes>
        </div>
    )
}

export default Home;