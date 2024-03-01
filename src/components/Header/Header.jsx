import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <h1>Food delivery</h1>
                <nav style={{ display: 'flex', gap: '10px' }}>
                    <NavLink
                        to="/"
                        style={{
                            paddingRight: '10px',
                            borderRight: '1px solid black',
                        }}
                    >
                        Shop
                    </NavLink>
                    <NavLink to="/cart">Shoping Cart</NavLink>
                </nav>
            </Container>
        </HeaderStyled>
    );
};
