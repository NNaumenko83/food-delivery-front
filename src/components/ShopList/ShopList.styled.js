import styled from 'styled-components';

export const ShopsContainer = styled.div`
    display: flex;
    max-width: 200px;
    height: 100%;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    height: calc(100vh - 120px);
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const Disabled = styled.p`
    color: #9c9c9c;
`;
