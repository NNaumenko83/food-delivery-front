import { Outlet, useNavigate, useParams } from 'react-router-dom';

import ShopList from '../../components/ShopList/ShopList';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectShop } from '../../redux/shopSlice';

function Shops() {
    const navigate = useNavigate();
    const { shop } = useSelector(selectShop);
    const { shopName } = useParams();

    useEffect(() => {
        if (shop) {
            navigate(`/shops/${shop}`);
        }
    }, []);

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
