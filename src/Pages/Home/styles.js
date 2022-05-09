import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #000;
  height: 8rem;

  img {
    height: 5.5rem;
  }

  img:hover {
    opacity: 0.8
  }

  @media(max-width: 520px) {
    height: 6rem;
    
    img {
      height: 4rem;
    }
  }
`;

export const Contant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin: 2% 5% 4%;
    text-align: center;
  }

  @media(max-width: 520px) {
    h2 {
      font-size: 18px;
      /* margin: -2% 5% 4%; */
    }
  }
`;

export const Button = styled.button`
  margin: 10px 10px 2%;
  padding: 10px;

  height: 60px;
  width: 150px;

  font-size: 16px;
  font-weight: bold;

  background: #05EE46;

  border: 1px solid #03ED44;
  border-radius: 5px;
  box-shadow: 0 0 1em #333;
  transition: all .3s;

  a{
    text-decoration: none;
    color: #fff;
  }

  &:hover{
    opacity: .8
  }
`;

export const QRCode = styled.a`
  text-decoration: none;
  margin-bottom: 2%;

  img{
    height: 14rem;
    transition: all 0.2s;

  }

  &:hover {
    cursor: pointer;
    opacity: .8;    
  }

  @media(max-width: 520px) {
    img {
      height: 9rem
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;

  background: #000;

  h3{
    display: flex;
    justify-content: center;

    font-size: 14px;
    font-weight: 500;
    line-height: 19.2px;

    padding: 1% 4%;
    color: #fff;

    border-top: 1px solid #fff;
  }

  @media(max-width: 520px) {
    h3 {
      font-size: 10px;
    }
  }
`;

export const FooterWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;

  margin: 1% 10%;

  svg {
    height: 2rem;
    width: 2em;
    color: #fff;
  }

  img {
    height: 4rem;
  }

  @media(max-width: 520px) {
    margin: 1% 5%;
    
    svg {
      height: 1.5rem;
      width: 1.5em;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    margin-right: 1rem;
    transition: all 0.2s;
  }

  svg:hover {
    cursor: pointer;
    opacity: .8;
    margin-bottom: 5px;
  }

  @media(max-width: 520px) {
    svg {
      margin-right: .5rem;
    }
  }
`;

