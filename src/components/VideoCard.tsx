import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import * as styled from '@/styles/components/VideoCard'
import Modal from './Modal'

import { Video } from '@/interfaces/Video'

import BannerVideo from '@/assets/thumbnail.png'

export default function VideoCard({ title, url, description, id }: Video) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <styled.VideoCard data-testid="video-card">
          <Image src={BannerVideo} alt="Capa do vídeo" />
          <styled.VideoCardInfo>
            <p>{title}</p>
          </styled.VideoCardInfo>
        </styled.VideoCard>
      </Dialog.Trigger>
      <Modal
        key={id}
        title={title}
        url={url}
        description={description}
        id={id}
      />
    </Dialog.Root>
  )
}
