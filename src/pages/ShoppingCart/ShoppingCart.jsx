import {
    CartContainer,
    CartProducts,
    CouponsWrapper,
    FormContainer,
    MapWrapper,
    PriceWrapper,
    TestWrapper,
    TextPrice,
} from './ShoppingCart.styled';
import { Form } from '../../components/Form/Form';
import { CartProductsList } from '../../components/CartProductsList/CartProductsList';
import { useSelector } from 'react-redux';
import { selectTotalValue } from '../../redux/productsSlice';

import Map from '../../components/Map/Map';
import Container from '../../components/Container/Container';
import { AddressProvider } from './context/AddressContext';

// const API_KEY = import.meta.env.VITE_API_KEY;
// console.log('API_KEY:', API_KEY);

const ShoppingCart = () => {
    const total = useSelector(selectTotalValue);

    return (
        <Container>
            <CartContainer>
                <MapWrapper>
                    <Map />
                </MapWrapper>
                <FormContainer>
                    <Form />
                </FormContainer>

                <CartProducts>
                    <CartProductsList />
                </CartProducts>
                <PriceWrapper>
                    <TextPrice>Total price: {total} UAH</TextPrice>
                </PriceWrapper>
                <CouponsWrapper>
                    <p>Coupons</p>
                </CouponsWrapper>
                <TestWrapper>
                    <p>Test</p>
                </TestWrapper>
            </CartContainer>
        </Container>
    );
};

export default ShoppingCart;
