import styled from 'styled-components';

export const AreaInput = styled.div`
    display: flex;
    margin-top: 60px;
    height: 300px;
    justify-content: center;

    div + div{
        border-left: 1px solid #F2f2f2;
        /* padding-left: 30px; */

       }

    div{
        padding: 30px;

        h5{
        margin-top: 30px;
        font-weight: bold;
        color: #979797;

        }

        small{
            color: #979797;
            font-size: 15px;
        }

        input{
            width: 400px;
            margin-top: 10px;
        }

        button{
            margin-top: 40px;
            background-color: #6DEA0F;
            font-weight: bold;
            color: #fff;
            border-color: #6DEA0F;
            width: 200px;
        }
    }
   
`;

export const Title = styled.h1`
  text-align: start;
  font-size: 30px;
  font-weight: bold;
  color: #979797;
`;


