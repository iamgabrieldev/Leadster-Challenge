import { styled } from 'styled-components'

export const Intro = styled.section`
  padding: 10rem 0;
  width: 100vw;
  background-color: #f0f8ff;

  @media (max-width: 720px) {
    padding: 4rem 1rem;

    h2 {
      margin-top: 1rem;
      font-size: 1.5rem !important;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .tag {
    color: #007eff;
    font-size: 0.875rem;
    font-weight: 800;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    border-radius: 1rem 1rem 1rem 0px;
    border: 1px solid #007eff;
  }

  .title {
    display: flex;

    @media (max-width: 720px) {
      img {
        display: none;
      }
    }

    h1 {
      font-size: 5.375rem;
      font-weight: 800;
      line-height: 1;
      color: #1f76f0;
      margin-right: -2rem;

      @media (max-width: 720px) {
        font-size: 2.5rem;
        margin: 0;
      }

      &::after {
        content: '';
        display: block;
        height: 1px;
        background-color: #d2e2e2;
        margin: 1rem 0;
      }
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 100;
  }

  p {
    font-size: 1.125rem;
  }
`
