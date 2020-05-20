import styled from "styled-components";

export const Container = styled.div`
    margin: 100px 0px 0px 300px;
    background-color: #fefefe;
`
export const SpanColor = styled.div`
    background-color: #6DEA0F;
    width: 50px;
    height: 10px;
    border-radius:8px;
    margin-right: 5px;

    &.light {
        background-color: #6dea0f85;
    }
    &.large{
        width: 140px;
    }
`

export const ContainerBread = styled.div`
    display: flex;
    padding: 0px!important;

    input{
        width: auto!important;
        margin: 0px!important;

        &:nth-child(1){
            margin-right:10px!important;
        }
    }
`

export const FileContainer = styled.div`
    padding: 0px!important;
    .file-drop {
        padding: 0px!important;

        .file-drop-target {
            padding: 20px 0px!important;
            display: flex;
        }
    }
`

export const FileLogo = styled.div`
    background-color: #9797aaad;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-left: 1px solid #9797aae6;
    border-bottom: 1px solid #9797aae6;
    border-top: 1px solid #9797aae6;
    width: 30%;
    text-align:center;
    color:white;
    cursor: pointer;
`

export const FileDrag = styled.div`
    background-color: #b8b8c521;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-right: 1px solid #9797aa29;
    border-bottom: 1px solid #9797aa29;
    border-top: 1px solid #9797aa29;
    width: 70%;
    text-align:center;
    color:#9797aaad;
    cursor: pointer;
`