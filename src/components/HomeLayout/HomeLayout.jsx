import { NavLink } from 'react-router-dom';
import {
    Disabled,
    ProductsContainer,
    ShopsContainer,
} from './HomeLayout.styled';
import { selectShop } from '../../redux/shopSlice';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const HomeLayout = ({ children }) => {
    const { shopName } = useSelector(selectShop);
    console.log('shopName:', shopName);

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
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
            <ProductsContainer>{children}</ProductsContainer>
        </div>
    );
};

export default HomeLayout;

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
