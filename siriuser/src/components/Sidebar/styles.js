import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const Sidebarr = styled.div`
    background-color: rgb(190, 190, 190);
    width: 250px;
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
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left: 40px;

    li{

        &:hover{
                color: #32d11d;
        }
        a{
            text-decoration: none;
            color: rgb(51, 51, 51);
            font-weight: bold;
            font-size: 18px;
        }
    }
    
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

        &:hover{
            a {
                color: #32d11d;
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