import * as styled from '@/styles/components/Tag'
import { ButtonHTMLAttributes, SyntheticEvent } from 'react'

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  variant?: string
  handleVariant: (name: string) => void
}

export default function Tag({ name, variant = '', handleVariant }: TagProps) {
  return (
    <styled.Tag
      name={name}
      onClick={() => handleVariant(name)}
      className={variant}
    >
      <p>{name}</p>
    </styled.Tag>
  )
}
