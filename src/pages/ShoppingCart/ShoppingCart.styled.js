import styled from '@emotion/styled';

export const CartContainer = styled.div`
    height: calc(100vh - 150px - 20px);

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const CartProducts = styled.div`
    display: flex;
    /* width: calc((100% - 15px * 2 + 30px) / 2); */
    gap: 15px;
    padding: 20px;
    border: 1px solid #272729;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);

    grid-area: 1 / 4 / 6 / 7;
`;

export const FormContainer = styled.div`
    padding: 20px;

    border: 1px solid #272729;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);

    grid-area: 4 / 1 / 8 / 4;
`;

export const TextPrice = styled.p`
    margin-top: 20px;
    font-size: 1.2rem;
`;

export const MapWrapper = styled.div`
    grid-area: 1 / 1 / 4 / 4;
    background-color: purple;
`;

export const PriceWrapper = styled.div`
    grid-area: 8 / 1 / 9 / 3;
    background-color: green;
`;
export const SubmitWrapper = styled.div`
    grid-area: 8 / 5 / 9 / 7;
    background-color: blue;
`;

export const CouponsWrapper = styled.div`
    grid-area: 6 / 4 / 8 / 7;
    background-color: yellow;
`;

export const TestWrapper = styled.div`
    grid-area: 8 / 3 / 9 / 5;
    background-color: tomato;
`;
