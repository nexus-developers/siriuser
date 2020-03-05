import styled from "styled-components";

export const Contact = styled.div`
    border-right: 3px solid #00e700;
    h1{
        color: rgb(51, 51, 51);
        justify-content: center;
        font-size: 35px;
    }

    p{
        color: #5e5e5e;
        font-size: 15px;
    }
`

export const Form  = styled.form`
    display: flex;
    flex-direction: column;
    
    div{

        h5{
            font-size: 18px;
            color: rgb(51, 51, 51);
            letter-spacing: 1px;
        }
        input{
            flex: 1;
            outline: none;
            width: 80%;
        }

        
    }
    
    select{
        width: 80%;
    }
`

export const AddContact = styled.div`
    h1{
        color: rgb(51, 51, 51);
        justify-content: center;
        font-size: 30px;
    }

    button{
        background-color: #32d11d; 
        border: none; 
        outline: none; 
        color: #fff; 
        padding: 10px; 
        border-radius: 4px; 
        font-weight: bold; 
        width: 80%;
    }
`

export const SecondContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const UlClients = styled.ul`
    flex: 1;
        
        
        ul{
            display: flex;
            justify-content: space-evenly;
            list-style: none;
            margin: 20px 0;
            text-align: center;
            align-items: center;
            
            
            button{
                outline: none;
                border: none;
                background-color: transparent;
                font-size: 27px;
                color: red;
                transition: opacity .2s;

                &:hover{
                    opacity: 0.5;
                }
            }
            

            & + ul {
                border-top: 3px solid #eee;
            }
        }
 
`

export const TableHead = styled.thead`
    background-color: #6DEA0F;
    color: #fff;
    margin-right: 20px;
`

export const ButtonClients = styled.button`
    border: none;
    outline: none;
    background: transparent;
`

export const ButtonAddClients = styled.button`
    margin: 20px 0;
    background-color: #FCCC2D;
    padding: 10px;
    border-radius: 4px;
    border: none;
    outline: none;

    color: #fff;
    font-weight: bold;

    display: flex;
    align-items: center;

    svg{
        margin-right: 10px;
    }
`

export const CloseModalButton  = styled.button``

export const SearchCamp = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    input{
        border: none;
        border-bottom: 1px solid #ddd;
        border-radius: 0;
    }

`

export const Divisor =  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`