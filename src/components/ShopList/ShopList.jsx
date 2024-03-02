import { ShopsContainer } from './ShopList.styled';

import { NavLink } from 'react-router-dom';
import { getShops } from '../../services/ShopAPI';

import { useQuery } from '@tanstack/react-query';
import { CustomLink } from '../CustomLink/CustomLink';

function ShopList() {
    const query = useQuery({
        queryKey: ['shops'],
        queryFn: getShops,
        staleTime: 6000,
    });

    return (
        <ShopsContainer>
            {query?.data ? (
                query.data.map(shop => (
                    <CustomLink key={shop.id} to={`/shops/${shop.id}`}>
                        {shop.name}
                    </CustomLink>
                ))
            ) : (
                <p>LOADING....</p>
            )}
        </ShopsContainer>
    );
}

export default ShopList;
