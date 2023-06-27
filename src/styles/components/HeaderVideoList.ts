import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 12rem;

  @media (max-width: 720px) {
    padding: 2rem 1rem;
    gap: 2rem;
    flex-direction: column;
  }
`

export const Line = styled.div`
  display: block;
  background-color: #e5e5e5;
  width: 60%;
  margin: 0rem auto;
  height: 2px;

  @media (max-width: 720px) {
    display: none;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 720px) {
    /* flex-direction: column; */
  }
`

export const Filter = styled.div`
  select {
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    margin-left: 0.5rem;
    background: none;
  }
`
