import styled from 'styled-components';

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
`

export const Card = styled.div`
    width: 350px;
    height: 450px;
    background: #fff;
    margin: 20px;
    padding: 20px;
    border-radius: 4px;
`

export const ProductPhoto = styled.div`

    display: flex;
    justify-content: center;
    
`

export const ProductDescription = styled.div`
    margin-top: 20px;
`
export const ProductActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        
        button{
            margin: 0 5px;
            height: 40px;
        }
    }

`
export const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 150px;

    input{
        height: 40px;
    }
`