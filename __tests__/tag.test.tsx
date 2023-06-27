import { fireEvent, render, screen } from '@testing-library/react'

import Tag from '@/components/Tag'

const mockFunction = jest.fn(() => 'teste')

describe('should render tag component', () => {
  it('render tag name', () => {
    render(<Tag name="teste" handleVariant={mockFunction} />)
    expect(screen.getByText('teste'))
  })

  it('must check if the function to activate tag is being called', () => {
    render(<Tag name="teste" handleVariant={mockFunction} />)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFunction).toHaveBeenCalled()
  })

  it('render tag active', () => {
    render(<Tag name="teste" variant="teste" handleVariant={mockFunction} />)
    expect(screen.getByTestId('teste'))
  })
})
