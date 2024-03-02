import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from './ProductCard.styled';
import { addProduct, selectProducts } from '../../redux/productsSlice';
import { toast } from 'react-toastify';
import { addShop } from '../../redux/shopSlice';

import imagePlaceholder from '../../images/placeholder-image.jpeg';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export const ProductCard = ({ name, img, price, id }) => {
    const dispatch = useDispatch();
    const { shopName } = useParams();

    const selectedProducts = useSelector(selectProducts);

    const handleButtonClick = () => {
        if (selectedProducts.length === 0) {
            dispatch(addShop(shopName));
        }

        const productArray = selectedProducts.filter(product => {
            return product.id === id;
        });

        if (productArray.length !== 0) {
            toast.info('This item is already in the cart', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            return;
        }

        dispatch(addProduct({ name, img, price, id }));

        toast.success('Product is added', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const handleImageError = event => {
        event.target.src = imagePlaceholder;
    };

    return (
        <Card>
            <img
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                src={img}
                alt={name}
                width={'300px'}
                onError={handleImageError}
            />

            <h3>{name}</h3>
            <p>{price} UAH</p>
            <Button type="button" onClick={handleButtonClick}>
                Add to Cart
            </Button>
        </Card>
    );
};

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
