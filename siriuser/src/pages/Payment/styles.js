import styled from 'styled-components';

export const Table = styled.table`
    width: 95%;
    

    thead{
        background-color: #00E700;
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

export const Total = styled.h5`
    text-align: end;
    margin-right: 5%;
`

export const ContentInformation = styled.div`
    border: 1px solid #00E700;
    border-radius: 4px;
    width: 95%;
    margin: 30px 0;
    padding: 20px;

    h5{
        margin-top: 30px;
    }

    
    h5:first-child {
        margin-top: 0px;
    }
    

    hr{
        background-color: #00E700;
    }

    input{
        width: 300px;
        
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 15px;

    div{

        button{
            height: 38px;
            margin-left: 20px;
            border-radius: 4px;
            background-color: #00E700;
            outline: none;
            border: none;
            padding: 8px;
            margin-top: 2px;
            text-align: center;
            color: #FFF;
            font-weight: bold
        }
    }

`