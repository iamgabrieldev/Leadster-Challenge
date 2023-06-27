import { styled } from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  gap: 4rem;

  @media (max-width: 720px) {
    gap: 1rem;
  }

  div:nth-child(2) {
    display: flex;
    gap: 0.5rem;
    opacity: 0.6;
  }
`

export const Copyright = styled.div`
  display: flex;
  gap: 0.5rem;

  strong {
    color: #0083ff;
  }
`
