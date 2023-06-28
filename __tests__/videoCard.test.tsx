import { render, screen } from '@testing-library/react'
import VideoCard from '@/components/VideoCard'

const video = {
  id: 1,
  title: 'Como aumentar sua Geração de Leads feat. Traktor',
  url: 'https://www.youtube.com/embed/eVwTlOuzT0Q',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto distinctio porro molestias ducimus reprehenderit unde modi dolor non animi accusamus alias quisquam cumque, rem tempora magni esse quos! Autem?',
}

const renderVideoCard = () =>
  render(
    <VideoCard
      id={video.id}
      title={video.title}
      url={video.url}
      description={video.description}
    />
  )

describe('should render videoCard component', () => {
  it('render videoCard title', () => {
    renderVideoCard()
    expect(screen.getByText(video.title))
  })

  it('render videoCard banner image', () => {
    renderVideoCard()
    expect(screen.getByRole('img'))
  })
})
