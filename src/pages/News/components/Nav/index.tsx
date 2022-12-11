import { BsFillPlayCircleFill, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { HiPhotograph } from 'react-icons/hi'
import { FiLink2 } from 'react-icons/fi'

import { Action, NavContainer, Share } from './styles'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useContext } from 'react'
import { NewsContext } from '../../../../contexts/NewsContext'

export function Nav() {
  const { setChangeImageToVideo } = useContext(NewsContext)

  function setImage() {
    setChangeImageToVideo(false)
  }

  function setVideo() {
    setChangeImageToVideo(true)
  }

  return (
    <NavContainer>
      <div>
        <RadioGroup.Root>
          <Action onClick={setImage} value="ver imagem" aria-label="Ver imagem">
            <HiPhotograph />
            <span>ver imagem</span>
          </Action>
          <Action onClick={setVideo} value="ver vídeo" aria-label="Ver vídeo">
            <BsFillPlayCircleFill />
            <span>ver vídeo</span>
          </Action>
        </RadioGroup.Root>
        <Share aria-label="Compartilhe">
          <span>Compartilhe:</span>
          <RadioGroup.Item value="Twitter">
            <BsTwitter aria-label="ícone do Twitter" />
          </RadioGroup.Item>
          <RadioGroup.Item value="WhatsApp">
            <BsWhatsapp aria-label="ícone do WhatsApp" />
          </RadioGroup.Item>
          <RadioGroup.Item value="Link">
            <FiLink2 aria-label="ícone de Link" />
          </RadioGroup.Item>
        </Share>
      </div>
    </NavContainer>
  )
}
