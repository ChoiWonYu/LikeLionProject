
import * as styles from './styles/NavStyles';
const ButtomNav=()=>{
    return(
        <styles.styledNav>
            <styles.styledLink to='/'>Home</styles.styledLink>
            <styles.styledLink to='/map'>Map</styles.styledLink>
            <styles.styledLink to='/reservationHistory'>reservationHistory</styles.styledLink>
            <styles.styledLink to='/mypage'>mypage</styles.styledLink>
        </styles.styledNav>
    )
}
export default ButtomNav;