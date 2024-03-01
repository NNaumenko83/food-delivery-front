import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
// import { Container } from './App.styled';
// import { Bars } from 'react-loader-spinner';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import ShopProducts from './components/ShopProducts/ShopProducts';

const ShoppingCart = lazy(() => import('./pages/ShoppingCart/ShoppingCart'));

const Home = lazy(() => import('./pages/Home/Home'));

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
    return (
        <>
            <Routes>
                <Route element={<SharedLayout />}>
                    <Route path="/" element={<Home />}>
                        <Route path="shops">
                            <Route
                                path=":shopName"
                                element={<ShopProducts />}
                            />
                        </Route>
                    </Route>

                    <Route path="/cart" element={<ShoppingCart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

            <ToastContainer />
        </>
    );
}

export default App;
