import * as styled from '@/styles/components/VideoList'
import HeaderVideoList from './HeaderVideoList'
import VideoCard from './VideoCard'
import { Line } from '@/styles/components/HeaderVideoList'

export default function VideoList() {
  return (
    <>
      <HeaderVideoList />
      <styled.VideoListContainer>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        {/* <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/eVwTlOuzT0Q"
          title="Next.js está virando um framework BACK-END?!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        /> */}
      </styled.VideoListContainer>
      <styled.Line />
    </>
  )
}
