import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: #979797;
  margin-bottom: 0;
`;


export const CardsContainer = styled.div`
    width: 95%;
    margin-top: 30px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 120px;
    border-radius: 8px;

    div{
        display: flex;
        justify-content: center;
    }

    h5{
        font-weight: bold;
        color: #5E5E5E;
        font-size: 18px;
    }

    p{
        color: #5E5E5E;
        font-size: 15px;
    }

    h3{
        color: #5E5E5E;
        font-size: 25px;
    }
`