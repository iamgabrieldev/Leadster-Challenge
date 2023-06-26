import { styled } from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  gap: 4rem;

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
