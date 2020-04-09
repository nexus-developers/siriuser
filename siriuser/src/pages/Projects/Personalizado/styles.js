import styled from "styled-components";

export const Title = styled.h5`
    margin-top: 20px;
    font-size: 30px;
    color: #525252;
    font-weight: bold;
    margin-bottom: 20px;
`

export const Divisor = styled.div`
    display: flex;
    flex-direction: row;

    div{
        margin-right: 35px;
    }
`

export const InternContainer = styled.div`
    width: 95%;
    overflow-x: hidden;
    margin-top: 0px;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 40px;
`

export const GeneratePreView = styled.div`
    display: flex;
    justify-content: flex-end;

    button{
        width: 200px;
        height: 40px;
        background-color: #65FF00;
        border-radius: 4px;
        border: none;
        color: #FFF;
        font-weight: bold;
    }
`

export const InternContainer2 = styled.div``
export const Form = styled.form`
 

    select, input{
        width: 500px;
        margin-bottom: 40px;
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
    width: 95%;
    border-radius: 4px;
    margin-bottom: 40px;

    table{
        
        thead{
            background-color: #65E213;
            padding: 20px;

            th{
                color: #FFF;
                font-weight: bold;
            }
        }
    }
    
`

export const Quantity = styled.div`
    display: flex;
    flex-direction: column;

    label{
        margin-bottom: 0;
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
export const ModuleSelection = styled.div`
    display: flex;
    flex-direction: row;
    
    div{
        margin: 10px;
    }
`

export const DivisorButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label{
        text-align: center;
        font-weight: bold;
        margin-top: 10px;
    }


`

export const Charts = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
`

export const FinancialContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 60px;
`

export const FinancialButton = styled.button`
    height: 45px;
    padding: 10px;
    margin: 30px 0;
    background-color: #00E700;
    border: none;
    outline: none;
    border-radius: 4px;
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    transition: background-color 0.2s;

    &:hover{
        background-color: #02CC02;
    }
`

export const TopNavigation = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
`

export const RouteName = styled.p`
    margin-bottom: 0;
    color: ${ props => props.active ? '#00E700' : "#000" };
    font-weight: bold;
`

export const HR1 = styled.hr`
    width: 450px;
    background-color: #00E700;
    height: 4px;
    border: none;
    outline: none;
    position: absolute;
    top: 117px;
    left: 490px;
`

export const HR2 = styled.hr`
    width: 410px;
    background-color: #00E700;
    height: 4px;
    border: none;
    outline: none;
    position: absolute;
    top: 117px;
    right: 215px;
`

export const NavigationRoute = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

`

export const NavigationButton = styled.button`
    margin-top: 0;
    width: 20px;
    height: 20px;
    background-color: ${props => props.active ? "#00E700" : "#FFFF"};
    border-radius: 10px;
    border: 2px solid #00E700;
`
export const MapsDiv = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
`

export const ButtonAddModule= styled.button`
    width: 160px;
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

export const ModuleQuantity = styled.div`
    width: 160px;
    padding: 10px;
    border-radius: 25px;
    border: none;
    outline: none;
    color: #525252;
    font-weight: bold;
    margin-left: 20px;

    h5{
        margin-top: 10px;
    }
`

export const ModuleButton = styled.button`
    height: 300px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: ${ props => props.selected ? '#E6E6E6' : '#FFF' };
    padding: 10px;
`