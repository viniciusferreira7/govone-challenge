import { BsFillPlayCircleFill, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { HiPhotograph } from 'react-icons/hi'
import { FiLink2 } from 'react-icons/fi'

import { Action, NavContainer, Share } from './styles'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useContext } from 'react'
import { NewsContext } from '../../../../contexts/NewsContext'

export function Nav() {
  const { news, setChangeImageToVideo } = useContext(NewsContext)

  function setImage() {
    setChangeImageToVideo(false)
  }

  function setVideo() {
    setChangeImageToVideo(true)
  }

  const shareWithTwitter = `https://twitter.com/intent/tweet?text=${
    news[0].titulo + '--Resumo:' + news[0].resumo
  }`

  const shareWithWhatsApp = `https://api.whatsapp.com/send?text=${
    news[0].titulo + '--Resumo:' + news[0].resumo
  }`

  async function shareWithLink(): Promise<void> {
    const shareData = {
      title: news[0].titulo,
      text: news[0].resumo,
      url: 'https://govone-challenge.vercel.app/news',
    }

    await navigator.share(shareData)
  }

  return (
    <NavContainer>
      <div>
        <RadioGroup.Root>
          <Action
            onClick={setImage}
            value="ver imagem"
            title="Trocar para imagem"
            aria-label="Ver imagem"
          >
            <HiPhotograph />
            <span>ver imagem</span>
          </Action>
          <Action
            onClick={setVideo}
            value="ver vídeo"
            title="Trocar para vídeo"
            aria-label="Ver vídeo"
          >
            <BsFillPlayCircleFill />
            <span>ver vídeo</span>
          </Action>
        </RadioGroup.Root>
        <Share aria-label="Compartilhe">
          <span>Compartilhe:</span>
          <RadioGroup.Item value="Twitter">
            <a
              href={`${shareWithTwitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter title="Twitter" aria-label="ícone do Twitter" />
            </a>
          </RadioGroup.Item>
          <RadioGroup.Item value="WhatsApp">
            <a
              href={`${shareWithWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp title="WhatsApp" aria-label="ícone do WhatsApp" />
            </a>
          </RadioGroup.Item>
          <RadioGroup.Item onClick={() => shareWithLink()} value="Link">
            <FiLink2 title="Link" aria-label="ícone de Link" />
          </RadioGroup.Item>
        </Share>
      </div>
    </NavContainer>
  )
}
