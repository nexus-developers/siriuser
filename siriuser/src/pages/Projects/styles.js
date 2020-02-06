import styled from "styled-components";

export const InternContainer = styled.div`
    overflow-x: hidden
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

    button{
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
export const FormPreView = styled.div`
    display: flex;
    flex-direction: column;

    ul{
        margin: 100px auto;

        h5{
            margin-bottom: 20px;
        }
    }
`