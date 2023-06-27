import { styled } from 'styled-components'

export const VideoListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 2rem auto 0rem;
  background-color: #f9f9f9;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 720px) {
    padding: 2rem 0;
    width: 100%;
    justify-content: center;
  }
`

export const Line = styled.div`
  display: block;
  background-color: #e5e5e5;
  width: 60%;
  margin: 2rem auto 4rem;
  height: 2px;
`
