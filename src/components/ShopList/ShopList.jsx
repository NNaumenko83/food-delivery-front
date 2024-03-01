import { useSelector } from 'react-redux';
import { Disabled, ShopsContainer } from './ShopList.styled';
import { selectShop } from '../../redux/shopSlice';
import { NavLink } from 'react-router-dom';

function ShopList() {
    const { shopName } = useSelector(selectShop);
    return (
        <ShopsContainer>
            Shops:
            {shopName === 'mcdonalds' || !shopName ? (
                <NavLink to="/shops/mcdonalds">McDonalds</NavLink>
            ) : (
                <Disabled>McDonalds</Disabled>
            )}
            {shopName === 'kfc' || !shopName ? (
                <NavLink to="/shops/kfc">KFC</NavLink>
            ) : (
                <Disabled>KFC</Disabled>
            )}
            {shopName === 'murakami' || !shopName ? (
                <NavLink to="/shops/murakami">Murakami</NavLink>
            ) : (
                <Disabled>Murakami</Disabled>
            )}
        </ShopsContainer>
    );
}

export default ShopList;
