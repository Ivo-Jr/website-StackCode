import React from 'react';

import { 
  Container, 
  Header, 
  Footer, 
  FooterWrapper, 
  Icons, 
  Contant, 
  Button, 
  QRCode 
} from './styles';
import logoImg from '../../assets/icon/logo.svg';
import startCodeImg from '../../assets/icon/StartCode.svg';
import qrCodeImg from '../../assets/icon/qrcode.svg';
import { SiTelegram } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

export default function Home() {
  return (
    <Container>
      <Header>
        <a href="/" rel="noreferrer">
          <img src={logoImg} alt="imagem de logo" />
        </a>
      </Header>

      <Contant>
        <h2>Clique botão ou no QRCode e tire suas dúvidas com a gente!</h2>
        <QRCode href="https://api.whatsapp.com/send?phone=5511966659526"target="_blank" rel="noreferrer">
          <img src={qrCodeImg} alt="imagem-qrcode" />
        </QRCode>

        <Button>
          <a href="https://api.whatsapp.com/send?phone=5511966659526"target="_blank" rel="noreferrer">
            Clique aqui  
          </a>
        </Button>
      </Contant>


      <Footer>
        <FooterWrapper>
          <img src={startCodeImg} alt="old-logo" />

          <Icons>
            <a href="https://t.me/ivojr1" target="_blank" rel="noreferrer">
              <SiTelegram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511966659526"target="_blank" rel="noreferrer">
              <IoLogoWhatsapp />
            </a>
            <a href="mailto:contato@ivojr.com.br"target="_blank" rel="noreferrer">
              <MdEmail />
            </a>
            <a href="https://www.youtube.com/channel/UCtC2auiw3v4lo36WRrVNT4g"target="_blank" rel="noreferrer">
              <BsYoutube />
            </a>
            <a href="https://www.facebook.com/Ivo-Junior-Iniciando-na-Programa%C3%A7%C3%A3o-110291111656270/?ref=pages_you_manage"target="_blank" rel="noreferrer">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/_ivo.jr/" target="_blank" rel="noreferrer">
              <AiFillInstagram/>
            </a>
          </Icons>
        </FooterWrapper>

        <h3>© 2022 Stack Code</h3>
      </Footer>
    </Container>
  );
}
