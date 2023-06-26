import * as styled from '@/styles/components/VideoCard'
import Image from 'next/image'

import BannerVideo from '@/assets/thumbnail.png'
import * as Dialog from '@radix-ui/react-dialog'
import Modal from './Modal'

export default function VideoCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <styled.VideoCard>
          <Image src={BannerVideo} alt="Capa do vídeo" />
          <styled.VideoCardInfo>
            <p>Como aumentar sua Geração de Leads feat. Traktor</p>
          </styled.VideoCardInfo>
        </styled.VideoCard>
      </Dialog.Trigger>
      <Modal />
    </Dialog.Root>
  )
}
