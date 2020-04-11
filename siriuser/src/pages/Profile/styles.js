import styled from 'styled-components';

export const ProgressContainer = styled.div`
  width: 95%;
  margin-top: 50px;

  p{
      font-weight: bold;
      color: #5e5e5e;
  }

  span{
      font-weight: 100;
      color: #5e5e5e;
  }
`;
export const CardProfile = styled.div`
    background-color: #65E213;
    border-radius: 8px;
    width: 60%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    overflow: hidden;

    img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        border: 3px solid #FFF;
    }

    div{
        margin-left: 20px;
        margin-top: 15px;
    }

    h3{
        color: #fff;
        font-weight: bold;
        margin-bottom: 0px;
    }

    p{
        color: #F2f2f2;
    }

    span{
        font-weight: 100;
    }

    button{
      position: absolute;
      top: 370px;
      right: 530px;
      background-color: transparent;
      border: none;
      outline: none;
    }
`

export const Services = styled.div`
    margin: 40px 0;

    div{
        margin-top: 20px;
    }
    
    label{
        display: block;
        margin-bottom: 2px;
        font-weight: bold;
        color: #525252;
    }

    input{
        width: 500px;
    } 

    select{
        width: 500px;
    } 
`

export const Cancel = styled.button`
    margin-right: 20px;
    border: 1px solid #f2f2f2;
    width: 200px;
    border-radius: 4px;
    color: #000;
    font-weight: bold;
    border: none;
    height: 45px;
`

export const Register = styled.button`
        width: 200px;
        border: none;
        background-color: #32d11d;
        color: #fff;
        font-weight: bold;
        padding: 10px;
        border-radius: 4px;
`