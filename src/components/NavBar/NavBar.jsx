import { NavLink } from 'react-router-dom';
import { NavBarStyled } from './NavBar.styled';

const NavBar = () => {
    return (
        <NavBarStyled>
            <NavLink to="/shops">SHOPS</NavLink>
            <NavLink to="/cart">CART</NavLink>
            <NavLink to="/history">HISTORY</NavLink>
            <NavLink to="/coupons"> COUPONS</NavLink>
        </NavBarStyled>
    );
};

export default NavBar;
