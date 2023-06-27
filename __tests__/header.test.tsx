import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('should render header component', () => {
  it('render header component', () => {
    render(<Header />)
    expect(screen.getByTestId('header'))
  })

  it('render logo image in header component', () => {
    render(<Header />)
    expect(screen.getByRole('img'))
  })
})
