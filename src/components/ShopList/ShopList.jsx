import { ShopsContainer } from './ShopList.styled';

import { NavLink } from 'react-router-dom';
import { getShops } from '../../services/ShopAPI';

import { useQuery } from '@tanstack/react-query';

function ShopList() {
    const query = useQuery({
        queryKey: ['shops'],
        queryFn: getShops,
        staleTime: 6000,
    });

    return (
        <ShopsContainer>
            Shops:
            {query?.data ? (
                query.data.map(shop => (
                    <NavLink key={shop.id} to={`/shops/${shop.id}`}>
                        {shop.name}
                    </NavLink>
                ))
            ) : (
                <p>LOADING....</p>
            )}
        </ShopsContainer>
    );
}

export default ShopList;
