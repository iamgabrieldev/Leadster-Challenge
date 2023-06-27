import { styled } from 'styled-components'

export const Publicity = styled.section`
  background-color: #f0f8ff;
  padding: 4rem 0;
`

export const PublicityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  align-items: center;

  @media (max-width: 720px) {
    padding: 0 1.5rem;
    gap: 1rem;
    .publicity-image {
      width: 100%;
      height: 30%;
    }
  }
`

export const PublicityInfo = styled.div`
  h2 {
    font-size: 2.625rem;
    font-weight: 400;
    width: 30rem;
    margin-bottom: 1rem;

    @media (max-width: 720px) {
      font-size: 1.5rem;
      padding: 0 3.2rem;
      width: 100%;
    }
  }

  p {
    font-size: 1.5rem;

    @media (max-width: 720px) {
      padding: 0 0 0 3rem;
      font-size: 1rem;
    }
  }
`

export const Line = styled.div`
  display: block;
  background-color: #e5e5e5;
  margin: 1.5rem 0;
  width: 104%;
  height: 2px;
`

export const PublicityActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;

  @media (max-width: 720px) {
    gap: 1rem;
    justify-content: center;
  }

  button {
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    background-color: #0083ff;
    padding: 1.5rem 2rem;
    border-radius: 2rem;
    text-transform: uppercase;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const PublicityActionsFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 720px) {
    margin-top: 2rem;
    flex-direction: column;
    text-align: center;
    gap: 0.25rem;
    p {
      padding: 0;
    }
  }

  p {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
