import styled from "styled-components";

export const Title = styled.h5`
    margin-top: 20px;
    font-size: 26px;
    margin-bottom: 40px;
`

export const Divisor = styled.div`
    display: flex;
    flex-direction: row;

    div{
        margin-right: 35px;
    }
`

export const InternContainer = styled.div`
    overflow-x: hidden;
    margin-top: 140px;
`
export const InternContainer2 = styled.div``
export const Form = styled.form`
    

    select, input{
        width: 500px;
        margin-bottom: 20px;
    }

    label{
        font-weight: bold;
    }

    small{
        display: block;
        color: #797979;
    }

    
    `
export const FormPreView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 40px 0;


    ul{
    flex: 1;
    width: 95%;

        h5{
            margin-bottom: 20px;
        }
    }

    h3{
        text-align: end;
        margin-top: 20px;
        margin-right: 60px;
    }

    button{
        
        justify-content: flex-end;
        background-color: #32d11d; 
        border: none; 
        outline: none; 
        color: #fff; 
        padding: 10px; 
        border-radius: 4px; 
        font-weight: bold; 
        width: 500px;
        margin-top: 20px;
    }
`