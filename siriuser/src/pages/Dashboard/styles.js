import styled from "styled-components";

export const Title = styled.h2`
    margin-bottom: 20px;
    color: #525252;
    font-weight: bold;
`

export const CardContainer = styled.div`
    width: 95%;
`

export const Card = styled.div`
    width: 20rem;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 4px;
    background-color: #65E213;

    header {
        margin-top: 10px;

        h5{
            color: #fff;
            font-weight: bold;
        }
    }

    div{
        h1{
            font-size: 60px;
            font-weight: bold;
            color: #FFF
        }

        p{
            font-size: 30px;
            margin-top: 10px;
            font-weight: bold;
            color: #FFF
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

export const RowCards = styled.div`
    display: flex;
    justify-content: space-around;

`

export const CardTitle = styled.h1`
    font-size: 16px;
`

export const CardFull = styled.div`
    margin-bottom: 30px;
    width: 97%;
    
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

export const CircleProgress = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
    margin-top: 30px;
`

export const CircleContainer = styled.div`
    width: 300px; 
    height: 300px;
    display: flex; 
    padding: 10px;
    display: flex;
    flex-direction: column;

    div{
        margin: 0 auto;
    }
    

    p{
        text-align: start;
        font-weight: bold;
        color: #525252;
    }
`

export const CircleText = styled.p`
    color: #525252;
    font-weight: bold;
    font-size: 25px;
`

export const Divisor = styled.div`

    select{
        margin-right: 20px;
        margin-top: 20px;
        width: 25px;

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
export const NoticiesCards = styled.div`
    display: flex;
    justify-content: space-around;
`

export const NoticiesCard = styled.div`
    padding: 10px;
    border-radius: 4px;
    margin: 20px;

    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        p{
            color: #65E213;
            font-weight: bold;
            font-size: 20px;
        }

        div{
            background-color: #65E213;
            padding: 2px;
            border-radius: 3px;
            height: 25px;

            p{
                color: #FFF;
                font-weight: 100;
                font-size: 15px;
            }
        }
    }

    p{
        color: #979797;
        font-size: 15px;
        font-weight: bold;
    }

    div{
        span{
            color: #979797;
            margin-top: 8px;
            margin-left: 5px;
            font-size: 13px;
        }
    }
`
