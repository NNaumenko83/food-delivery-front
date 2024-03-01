import { Outlet, useParams } from 'react-router-dom';

import ShopList from '../../components/ShopList/ShopList';
import { Suspense } from 'react';

function Shops() {
    const { shopName } = useParams();

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <ShopList />
            {!shopName && <h1>Chooose a shop</h1>}
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default Shops;
