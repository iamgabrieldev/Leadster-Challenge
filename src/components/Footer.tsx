import * as styled from '@/styles/components/Footer'

export default function Footer() {
  return (
    <styled.Footer>
      <styled.Copyright data-testid="copyright">
        <p>Copyright &copy; 2015 - 2022 Todos os direitos reservados</p>
        <span>|</span> <strong>Leadster</strong>
      </styled.Copyright>
      <div data-testid="address">
        <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000</p>
        <span>|</span>
        <p>Termos de uso</p>
      </div>
    </styled.Footer>
  )
}
