import { styled } from 'styled-components'

export const Publicity = styled.section`
  background-color: #f0f8ff;
  padding: 4rem 0;
  margin-top: 2rem;
`

export const PublicityContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;
`

export const PublicityInfo = styled.div`
  h2 {
    font-size: 2.625rem;
    font-weight: 400;
    width: 30rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
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
  gap: 2rem;
  align-items: center;

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

  p {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
