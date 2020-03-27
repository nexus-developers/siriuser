import styled from 'styled-components';

export const Table = styled.table`
    width: 95%;
    

    thead{
        background-color: #00E700;
    }
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