import styled from 'styled-components';

export const Container = styled.div`
    height: 200px;
    position: relative;
    border-radius: 4px;
`;


export const ContainerMap  = styled.div`
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const InputMap = styled.input`
    margin: 20px 20px 0 20px;
    width: 300px;
`
export const ButtonMap = styled.button`
    margin-top: 20px;
    height: 40px;
    width: 80px;
    background-color: #65E213;
    font-weight: bold;
`