import { render, screen } from '@testing-library/react'

import Publicity from '@/components/Publicity'

const altImage =
  'Ilustração sobre a eficiência da ledster na captação de leads em comparação com outras ferramentas'

describe('should render Publicity component', () => {
  it('render publicity image', () => {
    render(<Publicity />)
    expect(screen.getByAltText(altImage))
  })

  it('render title publicity', () => {
    render(<Publicity />)
    expect(screen.getAllByRole('heading'))
  })

  it('render button', () => {
    render(<Publicity />)
    expect(screen.getByRole('button'))
  })
})
