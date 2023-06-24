import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 12rem;
`

export const Line = styled.div`
  display: block;
  background-color: #e5e5e5;
  width: 60%;
  margin: 0rem auto;
  height: 2px;
`

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
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
