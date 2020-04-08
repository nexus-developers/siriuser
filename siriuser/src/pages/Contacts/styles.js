import styled from "styled-components";

export const Contact = styled.div`
    border-right: 3px solid #00e700;
    h1{
        color: #5E5E5E;
        justify-content: center;
        font-size: 35px;
        font-weight: bold;
    }

    p{
        color: #BCBCBC;
        font-size: 15px;
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

export const ButtonAddClients = styled.button`
    margin: 20px 0;
    background-color: #65FF00;
    padding: 10px;
    border-radius: 25px;
    border: none;
    outline: none;

    color: #fff;
    font-weight: bold;

    display: flex;
    align-items: center;

    svg{
        margin-right: 10px;
    }

    span{
        font-weight: 100;
    }
`

export const SearchCamp = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    input{
        width: 500px;
    }

    button{
        width: 100px;
        margin-left: 10px;
        background-color: #6DEA0F;
        border: none;
    }

`

export const Divisor =  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    p{
        text-align: center;
        margin: 2px 10px 0 0;
        font-size: 18px;
        font-weight: bold;
        color:#5e5e5e; 
    }

    select{
        width: 250px;
    }
`

export const CardClient = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border-radius: 8px;
    margin-right: 20px;

    div{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    h5{
        font-size: 18px;
        color: #5e5e5e;
        font-weight: bold;
    }

    p{
        color: #BCBCBC;
    }

    button{
        border: none;
        background-color: transparent;
        margin-top: 12px;
    }


`
