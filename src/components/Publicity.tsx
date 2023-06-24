import * as styled from '@/styles/components/Publicity'
import Image from 'next/image'

import ilustrationImg from '@/assets/comparativo_img_CTA.png'
import RatingImg from '@/assets/rating.webp'
import CardImg from '@/assets/no-card-dark.webp'
import SeloImg from '@/assets/selo_RD.png'

export default function Publicity() {
  return (
    <styled.Publicity>
      <styled.PublicityContainer>
        <Image
          src={ilustrationImg}
          alt="Ilustração sobre a eficiência da ledster na captação de leads em comparação com outras ferramentas"
        />
        <styled.PublicityInfo>
          <h2>
            Pronto para triplicar sua <strong>Geração de Leads?</strong>
          </h2>
          <p>
            Criação e ativação em <strong>4 minutos</strong>
          </p>
          <styled.Line />
          <styled.PublicityActions>
            <button>Ver Demonstração</button>
            <Image src={SeloImg} alt="" />
          </styled.PublicityActions>
          <styled.PublicityActionsFooter>
            <div>
              <Image src={CardImg} alt="" />
              <p>Não é necessário Cartão de Crédio</p>
            </div>
            |
            <div>
              <Image src={RatingImg} alt="" />
              <p>4.9/5 média de satisfação</p>
            </div>
          </styled.PublicityActionsFooter>
        </styled.PublicityInfo>
      </styled.PublicityContainer>
    </styled.Publicity>
  )
}
