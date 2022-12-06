import { BsFillPlayCircleFill, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { HiPhotograph } from 'react-icons/hi'
import { FiLink2 } from 'react-icons/fi'

import { Action, NavContainer, Share } from './styles'

export function Nav() {
  return (
    <NavContainer>
      <div>
        <section>
          <Action aria-label="Ver imagem">
            <HiPhotograph />
            <span>ver imagem</span>
          </Action>
          <Action aria-label="Ver vídeo">
            <BsFillPlayCircleFill />
            <span>ver vídeo</span>
          </Action>
        </section>
        <Share aria-label="Compartilhe">
          <span>Compartilhe:</span>
          <BsTwitter aria-label="ícone do Twitter" />
          <BsWhatsapp aria-label="ícone do WhatsApp" />
          <FiLink2 aria-label="ícone de Link" />
        </Share>
      </div>
    </NavContainer>
  )
}
