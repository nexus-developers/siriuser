import styled from "styled-components";

export const Title = styled.h5`
    margin-top: 20px;
    font-size: 30px;
    color: #65FF00;
    font-weight: bold;
    margin-bottom: 20px;

    &.large{
        font-size: 36px;
    }
`

export const InternContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    margin-top: 0px;
    padding: 20px 10px;
    border-radius: 4px;
    margin-bottom: 40px;
`

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

    &.relative{
        position: relative;
    }

    &.center{
        text-align: center;
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
    color: ${ props => props.active ? '#00E700' : "#000"};
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

export const ButtonAlter = styled.button`
    width: 230px;
    background-color: #65FF00;
    padding: 5px 10px;
    border-radius: 25px;
    border: none;
    outline: none;
    color: #fff;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;


    svg{
        margin-right: 10px;
    }

    span{
        font-weight: 100;
    }
`

export const ContainerFlex = styled.div`
    display: flex;
`

export const ContainerFlexSpace = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ContainerFlexDivHalf = styled.div`
    width: 50%;
`

export const ContainerFlexDivMedium = styled.div`
    width: 32.5%;
`

export const ContainerSelect = styled.div`
    select{
        width:  auto!important;
    }
`

export const LastSelect = styled.div`
    margin-left: 10px;
`

export const ContainerTextArea = styled.div`
    textarea{
        resize: none;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 10px;
    }

    &.noPadding{
        padding: 10px 0px!important;
    }

`
export const ContainerAddress = styled.div`
    margin-bottom: 20px;

    h3{
        color: #65FF00;
        font-weight:600;
    }
    h5{
        color:black;
        font-size:16px;
        font-weight:600;
    }
    h6{
        color:black;
        font-size:14px;
    }
`

export const Card = styled.div`
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border-radius: 6px;
    height: 100%;
    padding: 20px;
`

export const TextSimple = styled.p`
    margin-bottom: 2px;
    font-size: 14px;
`

export const ContainerTable = styled.table`
    width: 100%;
`

export const ContainerInputAuto = styled.div`
    input{
        width: auto!important;
    }
`

export const ButtonSimple = styled.span`
    margin: auto 10px;
    cursor: pointer;
`

export const ContainerOn = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 150px;
    height: -webkit-fill-available;
    position: relative;
`

export const ImageBack = styled.img`
    top: 140px;
    position: absolute;
    width: 90%;
    right: -120px;
    z-index: 100;
`

export const ImageLogo = styled.img`
    position: absolute;
    width: 140px;
    left:calc(50% - 70px);
`
export const ContainerIndexON = styled.div`
    z-index: 200;

    h4{
        color: #797878;

        &.bold{
            font-weight: bold;
        }
    }
`

export const ContainerProject = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 70px;

    h4{
        margin-bottom: 30px;
    }
`