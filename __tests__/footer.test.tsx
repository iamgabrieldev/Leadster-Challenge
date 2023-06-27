import { render, screen } from '@testing-library/react'

import Footer from '@/components/Footer'

describe('should render footer component', () => {
  it('render footer copyright', () => {
    render(<Footer />)
    expect(screen.getByTestId('copyright'))
  })

  it('render footer address', () => {
    render(<Footer />)
    expect(screen.getByTestId('address'))
  })
})
