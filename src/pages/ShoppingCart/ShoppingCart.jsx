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

import { createContext, useState } from 'react';

export const AddressContext = createContext();

const ShoppingCart = () => {
    const total = useSelector(selectTotalValue);
    const [addressBuyer, setAddressBuyer] = useState('');
    const [locationBuyer, setLocationBuyer] = useState(null);

    return (
        <AddressContext.Provider
            value={{
                addressBuyer,
                setAddressBuyer,
                locationBuyer,
                setLocationBuyer,
            }}
        >
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
        </AddressContext.Provider>
    );
};

export default ShoppingCart;
