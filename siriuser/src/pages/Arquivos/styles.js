import styled from 'styled-components';

export const Title = styled.div`
  font-size: 30px;
  color: #5E5E5E;
  font-weight:bold;
`;

export const CardsDownload = styled.div`
margin-top: 30px;
`;

export const Card = styled.div`
  width: 350px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  padding: 15px;
  height: 80px;
  margin: 20px;

  div{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 15px;
      p{
          font-size: 20px;
          text-align: center;
          font-weight: bold;
          color: #65E213;
          padding-top: 20px;
          margin: 0 10px;
      }

      small{
          font-size: 12px;
          color: #979797;
          margin-left: 10px;
      }
  }

  button{
      height: 20px;
      border: none;
      overflow: none;
      background: transparent;
      
  }
`;

export const LargeCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 4px;
    height: 320px;
    margin: 20px;
    width: 250px;

    div{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;

        button{
            width: 20px;
            border: none;
            background-color: transparent;
            outline: none;
        }
    }

    img{
        width: 100px;
        display: flex;
        justify-content: center;
        align-self: center;
    }

    p{
        margin-top: 10px;
        text-align: center;
        color: #65E213;
        font-weight: bold;
    }

    small{
        font-size: 12px;
        color: #979797;
        margin-top: 0;
        text-align: center;
        margin-bottom: 20px;
    }

    button{
        background-color: #65FF00;
        border-radius: 15px;
        border: none;
        text-align: center;
        color: #FFF;
        font-weight: bold;
        padding: 2px;
    }
`

export const CloseButton = styled.button`
    
   
`