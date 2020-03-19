import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
`;


export const InternContainer = styled.div`
    background-color: #FFF;
    width: 700px;
    margin-top: 100px;
    padding: 20px;
    border-radius: 4px;

    header{
        display: flex;
        align-self: center;
        justify-content: space-between;

        img{
            width: 250px;
            margin-bottom: 20px;
            height: 50px;
        }

        button{
            background: none;
            outline: none;
            border: none;
            margin-bottom: 20px; 
        }
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input{
        flex: 1;
        margin-bottom: 20px;
        border-radius: 4px;
        border: 1px solid #ddd;
        width: 500px;
        padding: 5px;
        
    }

    select{
        width: 500px;
    }

    button{
        flex: 0;
        margin-top: 40px;
        width: 200px;
        border: none;
        background-color: #32d11d;
        color: #fff;
        font-weight: bold;
        padding: 10px;
        border-radius: 4px;
    }
`