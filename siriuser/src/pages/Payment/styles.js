import styled from 'styled-components';

export const Table = styled.table`
    width: 95%;

    th{
        color: #FFF;
        font-weight: bold
    }
    
    td{
        font-weight: bold
    }

    thead{
        background-color: #65E213;
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
    width: 490px;
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

export const Total = styled.h5`
    text-align: start;
    color: #989898;
    font-weight: bold;
    font-size: 30px;
`

export const Title = styled.h1`
    font-size: 25px;
    margin-top: 60px;
    margin-left: 10px;
    font-weight: bold;
    color: #000;
`

export const ButtonGreen = styled.button`
    width: 300px;
    background-color: #65E213;
    font-weight: bold;
    border-radius: 4px;
    color: #FFF;
    border: none;
    height: 40px;
`

export const ContentInformation = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`
export const Content = styled.div`
    width: 590px;
    padding: 30px;
    height: 150px;
    border-radius: 4px;
    margin: 10px;

    label{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }

`

export const FreteResult = styled.div`
    margin-top: 10px;
    width: 600px;
    height: 310px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    label{
        font-size: 25px;
        color: #000;
        font-weight: bold;
    }

    h1{
        color: #BCBCBC;
        font-size: 80px;
    }
`