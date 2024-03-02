import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const LinkStyled = styled(Link)`
    font-size: 14px;
    font-weight: ${({ match }) => (match ? 600 : 400)};

    color: ${({ match }) => (match ? '#0e3b5f' : '#1f70cf')};

    transition: color 250ms linear;

    &:hover,
    &:focus {
        color: #0e3b5f;
    }
`;
