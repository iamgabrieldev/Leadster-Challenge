import Contact from '@/components/Contact'
import { render, screen } from '@testing-library/react'

const altImage = 'Logotipo da leadster'
const description = 'Transformando visitantes em clientes.'

describe('should render contact component', () => {
  it('render logo image', () => {
    render(<Contact />)
    expect(screen.getByAltText(altImage))
  })

  it('render description contact', () => {
    render(<Contact />)
    expect(screen.getByText(description))
  })

  it('render contact column information title', () => {
    render(<Contact />)
    expect(screen.getAllByRole('title').length).toBe(4)
  })
})
