import { ProductCard } from '../ProductCard/ProductCard';
import { List } from './ProductsList.styled';
import PropTypes from 'prop-types';

export const ProductsList = ({ products }) => {
    return (
        <List>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    img={product.imageURL}
                    price={product.price}
                    id={product.id}
                />
            ))}
        </List>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
};
