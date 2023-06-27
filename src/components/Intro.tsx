import * as styled from '@/styles/components/Intro'
import Image from 'next/image'

import AssetTitle from '@/assets/asset-header.png'

export default function Intro() {
  return (
    <styled.Intro>
      <styled.Container>
        <p data-testid="tag" className="tag">
          Webinars Exclusivos
        </p>
        <h2>Menos Conversinha,</h2>
        <div className="title">
          <h1>Mais Conversão</h1>
          <Image
            src={AssetTitle}
            alt="icone para estilizar o titulo principal"
          />
        </div>
        <p data-testid="description">
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </p>
      </styled.Container>
    </styled.Intro>
  )
}
