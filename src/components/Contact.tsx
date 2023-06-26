import * as styled from '@/styles/components/Contact'

import LogoImg from '@/assets/logo.png'
import Image from 'next/image'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'

export default function Contact() {
  return (
    <styled.Contact>
      <styled.ContactHeader>
        <Image src={LogoImg} alt="Logotipo da leadster" />
        <p>Transformando visitantes em clientes.</p>
      </styled.ContactHeader>
      <styled.ContactContent>
        <styled.ContactColumn>
          <strong>Links Principais</strong>
          <div>
            <p>Home</p>
            <p>Ferramenta</p>
            <p>Preços</p>
            <p>Contato</p>
          </div>
        </styled.ContactColumn>
        <styled.ContactColumn>
          <strong>Cases</strong>
          <div>
            <p>Geração de Leads B2B</p>
            <p>Geração de Leads em Software</p>
            <p>Geração de Leads em Imobiliária</p>
            <p>Cases de Sucesso</p>
          </div>
        </styled.ContactColumn>
        <styled.ContactColumn>
          <strong>Materiais</strong>
          <div>
            <p>Blog</p>
            <p>Parceria com Agências</p>
            <p>Guia Definitivo do marketing</p>
            <p>Materiais Gratuitos</p>
          </div>
        </styled.ContactColumn>
        <styled.ContactSocialMedia>
          <strong>Siga a Leadster</strong>
          <div className="socialmedia-group">
            <div>
              <LinkedinLogo weight="fill" />
            </div>
            <div>
              <FacebookLogo weight="fill" />
            </div>
            <div>
              <InstagramLogo weight="fill" />
            </div>
          </div>
          <div className="contact-info">
            <span>E-mail:</span>
            <p>contato@leadster.com.br</p>
          </div>
          <div className="contact-info">
            <span>Telefone:</span>
            <p>(42) 98828-9851</p>
          </div>
        </styled.ContactSocialMedia>
      </styled.ContactContent>
    </styled.Contact>
  )
}
