import {} from './ShopProducts.styled';

import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

import { getProducts } from '../../services/ShopAPI';
import { ProductsList } from '../ProductsList/ProductsList';
import { Error } from '../Error/Error';

import { useQuery } from '@tanstack/react-query';

const ShopProducts = () => {
    const { shopName } = useParams();
    console.log('shopName:', shopName);

    const { data, isLoading, error } = useQuery({
        queryKey: ['products', shopName],
        queryFn: async () => {
            const data = await getProducts(shopName);
            console.log('data:', data);
            return data;
        },
        staleTime: 6000,
    });

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
            {!isLoading && data && <ProductsList products={data} />}
            {error && <Error />}
        </>
    );
};

export default ShopProducts;
