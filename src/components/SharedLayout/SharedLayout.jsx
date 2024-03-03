import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SuspenseWrapper } from './SharedLayout.styled';
import Main from '../Main/Main';

export const SharedLayout = () => {
    return (
        <>
            <Header />
            <Main>
                <Suspense
                    fallback={
                        <SuspenseWrapper>
                            <MutatingDots
                                height={100}
                                width={100}
                                color="#1976d2"
                                secondaryColor="#1976d2"
                                radius={12.5}
                                ariaLabel="mutating-dots-loading"
                                visible={true}
                            />
                        </SuspenseWrapper>
                    }
                >
                    <Outlet />
                </Suspense>
            </Main>
            <Footer />
        </>
    );
};
