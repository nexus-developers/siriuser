import styled from 'styled-components';

export const Navbar = styled.nav`
  border-bottom: 1px solid #D3FAC1;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 30px;
  ul{
    background-color: #fff;
    height: 250px;
    width: 200px;
    border-radius: 4px;
    list-style: none;
    border: 1px solid #ddd;
    padding: 10px;
    display: flex;
    flex-direction: column;

    li{
      font-size: 20px;
      padding: 8px 0;

      & + li{
        border-top: 1px solid #ddd;
        
      }
      a{
        text-decoration: none;
        color: #D3D3D3;

        &:hover{
          color: #5d5d;
        }
      }
    }
  }



`