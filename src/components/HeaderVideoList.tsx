import * as styled from '@/styles/components/HeaderVideoList'
import Tag from './Tag'
import { useState } from 'react'

export default function HeaderVideoList() {
  const [tagName, setTagName] = useState('')

  const handleVariant = (name: string) => {
    setTagName(name)
  }

  return (
    <>
      <styled.Container>
        <styled.Tags>
          <Tag
            name="Agências"
            variant={tagName === 'Agências' ? 'active' : ''}
            handleVariant={() => handleVariant('Agências')}
          />
          <Tag
            name="Chatbot"
            variant={tagName === 'Chatbot' ? 'active' : ''}
            handleVariant={() => handleVariant('Chatbot')}
          />
          <Tag
            name="Marketing Digital"
            variant={tagName === 'Marketing Digital' ? 'active' : ''}
            handleVariant={() => handleVariant('Marketing Digital')}
          />
          <Tag
            name="Geração de Leads"
            variant={tagName === 'Geração de Leads' ? 'active' : ''}
            handleVariant={() => handleVariant('Geração de Leads')}
          />
          <Tag
            name="Mídia Paga"
            variant={tagName === 'Mídia Paga' ? 'active' : ''}
            handleVariant={() => handleVariant('Mídia Paga')}
          />
        </styled.Tags>
        <styled.Filter>
          <strong>Ordenar por</strong>
          <select>
            <option>Data de Publicação</option>
          </select>
        </styled.Filter>
      </styled.Container>
      <styled.Line />
    </>
  )
}
