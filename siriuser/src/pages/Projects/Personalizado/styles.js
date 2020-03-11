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
    width: 95%;

    table{
        
        thead{
            background-color: #00E700;
            padding: 20px;
        }
    }
    
`

export const Quantity = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    button{
        outline: none;
        border: none;
        background-color: #00E700;
        color: #fff;
        padding: 0 8px;
        border-radius: 4px;
        font-weight: bold;
    }

    label{
        margin: 5px 10px 0 10px;
    }
`

export const Dispositions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;

    
`

export const DispositionsForm = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;

    label{
        margin-top: 10px;
        font-weight: bold;
    }

    input{
        width: 250px;
        height: 35px;
    }
`
export const ModuleSelection = styled.div``

export const DivisorButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label{
        text-align: center;
        font-weight: bold;
    }
`

export const Charts = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
`