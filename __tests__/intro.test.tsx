import { render, screen } from '@testing-library/react'

import Intro from '@/components/Intro'

describe('should render intro component', () => {
  it('render tag', () => {
    render(<Intro />)
    expect(screen.getByTestId('tag'))
  })

  it('render principal title', () => {
    render(<Intro />)
    expect(screen.getByText('Mais Conversão'))
  })

  it('render secondary title', () => {
    render(<Intro />)
    expect(screen.getByText('Menos Conversinha,'))
  })

  it('render description', () => {
    render(<Intro />)
    expect(screen.getByTestId('description'))
  })
})
