import Image from 'next/image'

import LogoImg from '@/assets/logo.png'
import { HeaderStyled } from '@/styles/components/Header'

export default function Header() {
  return (
    <HeaderStyled data-testid="header">
      <Image src={LogoImg} alt="logotipo da leadster" />
    </HeaderStyled>
  )
}
