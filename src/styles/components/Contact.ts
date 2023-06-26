import { styled } from 'styled-components'

export const Contact = styled.section`
  padding: 4rem 0 0 0;
`

export const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 4rem;

  img {
    width: 280px;
    height: 60px;
  }

  p {
    opacity: 0.7;
  }
`
export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
`
export const ContactColumn = styled.div`
  strong {
    font-size: 1.125rem;
  }

  div {
    margin-top: 4rem;

    p {
      margin-bottom: 2rem;
      font-size: 1rem;
      opacity: 0.6;
    }
  }
`
export const ContactSocialMedia = styled.div`
  strong {
    font-size: 1.125rem;
  }

  .socialmedia-group {
    display: flex;
    gap: 1rem;
    margin: 3rem 0 0 0;

    div {
      padding: 0.5rem 0.6rem;
      border-radius: 50%;
      background-color: #f7f8fb;

      svg {
        font-size: 2rem;
        color: #838eab;
      }
    }
  }

  .contact-info {
    display: flex;
    gap: 0.25rem;
    margin-top: 1rem;

    p {
      opacity: 0.6;
    }
  }
`

export const Line = styled.div`
  display: block;
  background-color: #e5e5e5;
  margin: 2rem 0 0 0;
  width: 104%;
  height: 2px;
`
