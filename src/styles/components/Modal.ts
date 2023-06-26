import * as Dialog from '@radix-ui/react-dialog'
import { styled } from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const CloseButton = styled(Dialog.Close)`
  display: block;
  margin-left: auto;
  padding-right: 1rem;
`

export const Title = styled(Dialog.Title)`
  h2 {
    width: 360px;
    font-size: 1.5rem;
    text-align: center;
    margin: 0.25rem auto 2rem;

    strong {
      color: #007eff;
    }
  }
`

export const Content = styled(Dialog.Content)`
  border-top: 0.5rem solid #007eff;
  background-color: #fff;
  min-width: 32rem;
  border-radius: 6px;
  padding: 1rem 0 2rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Description = styled.div`
  padding: 1rem 1rem;
  p {
    width: 34rem;
    line-height: 1.4;
  }
`

export const Download = styled.div`
  padding: 0rem 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    p {
      font-weight: bold;
    }

    .xls {
      background-color: #9fefdf;
      border-radius: 0.25rem;

      svg {
        margin: 0 4px 0 8px;
        color: #00b184;
      }

      p {
        color: #00ae7f;
        border-radius: 0 0.25rem 0.25rem 0;
        padding: 0.5rem;
        background-color: #c2f4ea;
      }
    }

    .doc {
      background-color: #a1d9ff;
      border-radius: 0.25rem;

      svg {
        margin: 0 4px 0 8px;
        color: #0086ef;
      }

      p {
        color: #279bf1;
        border-radius: 0 0.25rem 0.25rem 0;
        padding: 0.5rem;
        background-color: #c2e6ff;
      }
    }

    .ppt {
      background-color: #fff1a0;
      border-radius: 0.25rem;

      svg {
        margin: 0 4px 0 8px;
        color: #ad9425;
      }

      p {
        color: #a99445;
        border-radius: 0 0.25rem 0.25rem 0;
        padding: 0.5rem;
        background-color: #fff8d0;
      }
    }
  }
`

export const Line = styled.div`
  display: block;
  background-color: #c5c5c5;
  margin: 0.5rem 0 1rem;
  width: 100%;
  height: 1px;
`
