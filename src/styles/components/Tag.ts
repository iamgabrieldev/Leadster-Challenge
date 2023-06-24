import { styled } from 'styled-components'

export const Tag = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  border-radius: 1rem;
  transition: 0.5s;

  p {
    font-size: 1rem;
    font-weight: bold;
  }

  &:hover {
    border-color: #007eff;
    color: #007eff;
  }

  &.active {
    background-color: #007eff;
    color: #fff;
    border: none;
  }
`
