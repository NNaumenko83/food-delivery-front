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
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectTotalValue } from '../../redux/productsSlice';
import { useEffect, useRef } from 'react';
import { deleteShop } from '../../redux/shopSlice';
import Map from '../../components/Map/Map';
import Container from '../../components/Container/Container';

const API_KEY = import.meta.env.VITE_API_KEY;
console.log('API_KEY:', API_KEY);

const ShoppingCart = () => {
    const total = useSelector(selectTotalValue);
    const selectedProducts = useSelector(selectProducts);
    const dispatch = useDispatch();

    const formRef = useRef(null);
    console.log('formRef:', formRef);

    const handleSubmit = e => {
        e.preventDefault();
        console.log('e:', e.target);
        console.log('aaaaa');
    };

    useEffect(() => {
        if (selectedProducts.length === 0) {
            dispatch(deleteShop());
        }
    }, [dispatch, selectedProducts.length]);

    return (
        <Container>
            <CartContainer>
                <MapWrapper>
                    <Map />
                </MapWrapper>
                <FormContainer>
                    <Form ref={formRef} onSubmit={handleSubmit} />
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
