import {FC} from 'react'
import { FooterContent, FooterDiv, Left, Right } from './styles'
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const FooterContainer:FC = () => {
  return (
    <FooterDiv><FooterContent>
      <Left>
      <p>
        Hecho por Pam 
      </p>
    </Left>
    <Right>
      <a
        href="https://www.linkedin.com/in/pamina-goldenberg-thiery/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsLinkedin size={ 35 } />
      </a>

      <a
        href="https://github.com/alhanampi"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsGithub size={ 35 } />
      </a>

      <a href="mailto:alhanampi@gmail.com" rel="noopener noreferrer">
        <SiGmail size={ 35 } />
      </a>
      <a
        href="https://wa.me/541167955422"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsWhatsapp size={ 35 } />
      </a>
    </Right>
      </FooterContent>
      </FooterDiv>
  )
}

export default FooterContainer