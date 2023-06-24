import { styled } from 'styled-components'

export const VideoCard = styled.div`
  background-color: #fff;
  border-radius: 32px;
  cursor: pointer;
  img {
    transition: 0.5s;
    border-radius: 32px 32px 0px 0px;
  }

  &:hover {
    img {
      filter: brightness(0.9);
    }

    div {
      p {
        color: #007ef9;
      }
    }
  }
`
export const VideoCardInfo = styled.div`
  p {
    width: 20rem;
    color: currentColor;
    font-size: 1.125rem;
    font-weight: bold;
    padding: 1rem;
    transition: 0.5s;
  }
`
