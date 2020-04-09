import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
  z-index: 2;

`;


export const InternContainer = styled.div`
    background-color: #FFF;
    width: 80%;
    height: 80%;
    margin-top: 0px;
    padding: 20px;
    border-radius: 4px;
    overflow: auto;

    header{
        display: flex;
        align-self: center;
        justify-content: space-between;

        button{
            background: none;
            outline: none;
            border: none;
        }

        div{
            
            div{
                display: flex;
                flex-direction: row;
            }
        }

        h5{
            color: #525252;
            font-weight: bold;
            font-size: 30px;
            margin-left: 20px; 
            opacity: 0.6;
        }
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 20px;
    justify-content: center;

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
`

export const DetailsProduct = styled.div``

export const FirstInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    div{
        h5{
            font-size: 18px;
        }
    }
`

export const TablesInformation = styled.div`
    
    table{
        
        thead{
            background-color: #32d11d;
            color: #fff;
            font-weight: bold;
            margin-bottom: 20px;
        }

        tbody{
        }
    }
`

export const FormDiv = styled.div`
    display: flex;
    flex-direction: row;


    div{
        display: flex;
        flex-direction: column;
        margin-right: 20px;

        label{
            font-weight: bold;
            color: #525252;
        }
    }
`

export const MapsDiv = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
`

export const Green1 = styled.hr`
    width: 50px;
    background-color: #32d11d;
    height: 10px;
    border-radius: 20px;
    margin-top: 0;
    margin-left: 20px;
`

export const Green2 = styled.hr`
    width: 150px;
    background-color: #32d11d;
    height: 10px;
    border-radius: 20px;
    margin-top: 0;
    margin-left: 5px;
    opacity: 0.3;
`
export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 20px;
`

export const Cancel = styled.button`
    margin-right: 20px;
    border: 1px solid #f2f2f2;
`

export const Register = styled.button`
        width: 200px;
        border: none;
        background-color: #32d11d;
        color: #fff;
        font-weight: bold;
        padding: 10px;
        border-radius: 4px;
`