import { render, screen } from '@testing-library/react'

import HeaderVideoList from '@/components/HeaderVideoList'

describe('should render headerVideoList component', () => {
  it('render tags an headerVideoList', () => {
    render(<HeaderVideoList />)
    expect(screen.getAllByRole('button').length).toBe(5)
  })

  it('render group select an headerVideoList', () => {
    render(<HeaderVideoList />)
    expect(screen.getByTestId('select'))
  })
})
