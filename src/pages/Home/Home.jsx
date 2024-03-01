import { Suspense } from 'react';

import { Bars } from 'react-loader-spinner';
import HomeLayout from '../../components/HomeLayout/HomeLayout';
import { Outlet, useParams } from 'react-router-dom';

const Home = () => {
    const { shopName } = useParams();
    console.log('shopName:', shopName);
    return (
        <HomeLayout>
            {!shopName && <h3>Choose a shop and make order</h3>}
            <Suspense
                fallback={
                    <Bars
                        height="40"
                        width="40"
                        color="#280232"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                }
            >
                <Outlet />
            </Suspense>
        </HomeLayout>
    );
};

export default Home;
