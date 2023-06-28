import { render, screen } from '@testing-library/react'

import VideoList from '@/components/VideoList'
import { videos } from '@/data/videos'

describe('should render videoList component', () => {
  it('render videoCards an videoList', () => {
    render(<VideoList />)
    expect(screen.getAllByTestId('video-card').length).toBe(videos.length)
  })
})
