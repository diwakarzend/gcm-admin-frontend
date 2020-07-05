import styled from 'styled-components';

export const TextWrapper = styled.div`
    width: 200px;
    margin-right: 20px;
    margin-bottom: 15px;
    &.lg{
        width: 400px;
    }
    label {
        font-size: 12px;
        color: #4a4a4a;
        padding-bottom: 5px;
        display: block;
        sup{
            color: #ed412d;
            vertical-align: top;
        }
    }
`;
export const Text = styled.input`
    height: 30px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    background-color: rgba(0, 0, 0, 0.04);
    padding: 0 10px;
    font-size: 11px;
    font-family: Roboto;
    width: 100%;
    &:focus, &:valid {
        background-color: #fff;
        border: solid 1px rgba(0, 0, 0, 0.2);
    }
`;
export const Error = styled.div`
    font-size: 11px;
    color: red;
`;


