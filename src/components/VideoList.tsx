import * as styled from '@/styles/components/VideoList'
import HeaderVideoList from './HeaderVideoList'
import VideoCard from './VideoCard'
import { videos } from '@/data/videos'

export default function VideoList() {
  return (
    <>
      <HeaderVideoList />
      <styled.VideoListContainer>
        {videos.map((video) => (
          <VideoCard
            id={video.id}
            key={video.id}
            title={video.title}
            url={video.url}
            description={video.description}
          />
        ))}
      </styled.VideoListContainer>
    </>
  )
}
