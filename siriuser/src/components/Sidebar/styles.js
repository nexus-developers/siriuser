import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    overflow: hidden;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const Sidebarr = styled.div`
    background-color: #FFF;
    width: 250px;
    border-right: 1px solid #C7F8B2;
`
export const StickySidebar = styled.div`
    top: 0;
    height: 100vh;
    position: relative;

    hr{
        width: 200px;
        margin-left: 20px;
    }
`
export const UlBrand = styled.ul`
    margin-top: 90px;
`
export const UlPages = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left: 40px;

    li {
        margin-bottom: 15px;
        font-size: 16px;
        padding: 8px;



        &:hover{
                background-color: #FBFAF8;
            a {
            }
        }

        a{
            text-decoration: none;
            color: rgb(51, 51, 51);
            font-weight: bold;
            font-size: 16px;
        }
    }
`

export const DropDownMenu = styled.ul`
    list-style: none;

    & > li {
        border-bottom: 1px solid rgb(51, 51, 51);
    }
`