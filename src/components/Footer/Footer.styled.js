import styled from '@emotion/styled';
import { Container } from '../../App.styled';

export const FooterStyled = styled.footer`
    background-color: #152444;
`;

export const FooterContainer = styled(Container)`
    display: flex;
    height: 120px;
    padding: 4px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.a`
    margin: 0 auto;
    color: #e9eb97;

    transition: color 300ms ease-in-out;

    &:hover,
    &:focus {
        color: #2093d8;
    }
`;

export const FooterText = styled.p`
    font-size: 12px;
    color: #ffe852;
`;

export const LinkWrapper = styled.div`
    display: flex;
    gap: 10px;
`;
