import styled from "styled-components";

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    h2{
        font-weight: 400;
    }
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Card = styled.div`
    width: 20rem;
    margin-bottom: 30px;

    header {
        margin-top: 10px;

        h5{
            color: #000;
            /* font-weight: bold; */
        }
    }

    div{
        h1{
            font-size: 60px;
        }

        p{
            font-size: 30px;
            margin-top: 10px;
        }
    }
`

export const InformationCard = styled.div`
    height: 270px;
    padding: 5px;
    width: 280px;
    margin-bottom: 40px;
    border-radius: 4px;
    color: #57789B;

    header{
        margin: 20px 5px;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 5px;

        div{
            span{
                font-size: 14px;
            }
        }
    }

`

export const RowCards = styled.div``

export const CardTitle = styled.h1`
    font-size: 16px;
`

export const CardFull = styled.div`
    margin-bottom: 30px;
    width: 93%;
    
    div{
        display: flex;
        justify-content: space-between;
        
        div{
            header{
                margin-top: 30px;
                margin-left: 20px; 
            }
        }
    }
   
    
`

export const Divisor = styled.div`

    select{
        margin-right: 20px;
        margin-top: 20px;
        width: 250px;

    }
`

export const BtnGroup = styled.div.attrs({
    
})`
    margin-top: 20px;
    margin-right: 20px;

    button{
        width: 200px;
        background-color: #6DEA0F;
        color: #fff;
        font-weight: bold;
        
        &:hover{
            background: #fff;
            border-color: #6DEA0F;
            color: #000;
        }

        
    }
`

export const ChartInformation = styled.div`
    display: flex;
    justify-content: space-evenly;

    div{
        display: flex;
        flex-direction: column;
        color: #6A6D68;
        margin-right: 80px;

        h5{
            font-size: 28px;
        }
        
    }
`
export const CardText = styled.p`
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 700;
`

export const CardBody = styled.div`
    ul{
        list-style: none;

        display: flex;
        justify-content: space-between
    }
`

export const Badge = styled.span`
    background-color: #6DEA0F;
    padding: 5px 10px 5px 10px;
    color: #fff;
    border-radius:10px;
`
