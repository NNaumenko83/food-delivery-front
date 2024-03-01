import { useEffect, useState } from 'react';
import {} from './ShopProducts.styled';

import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

import { getProducts } from '../../services/ShopAPI';
import { ProductsList } from '../ProductsList/ProductsList';
import { Error } from '../Error/Error';

const ShopProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { shopName } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const products = await getProducts(shopName);
                setProducts(products);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [shopName]);

    return (
        <>
            {isLoading && (
                <Bars
                    height="40"
                    width="40"
                    color="#280232"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            )}
            {products.length > 0 && (
                <ProductsList products={products} path={shopName} />
            )}
            {errorMessage && <Error />}
        </>
    );
};

export default ShopProducts;
