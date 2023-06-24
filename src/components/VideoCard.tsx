import * as styled from '@/styles/components/VideoCard'
import Image from 'next/image'

import BannerVideo from '@/assets/thumbnail.png'

export default function VideoCard() {
  return (
    <styled.VideoCard>
      <Image src={BannerVideo} alt="Capa do vídeo" />
      <styled.VideoCardInfo>
        <p>Como aumentar sua Geração de Leads feat. Traktor</p>
      </styled.VideoCardInfo>
    </styled.VideoCard>
  )
}
