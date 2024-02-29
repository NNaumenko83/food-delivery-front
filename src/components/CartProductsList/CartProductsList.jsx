import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/productsSlice';
import { CartList } from './CartProductsList.styled';
import { CartProductsListItem } from '../CartProductListItem/CartProductsListItem';

export const CartProductsList = () => {
    const products = useSelector(selectProducts);

    return products.length > 0 ? (
        <CartList>
            {products.map(product => (
                <CartProductsListItem
                    key={product.id}
                    image={product.img}
                    price={product.price}
                    id={product.id}
                    name={product.name}
                    qty={product.qty}
                />
            ))}
        </CartList>
    ) : (
        <h3>Choose product</h3>
    );
};
