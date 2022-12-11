import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 3.375rem;
  margin-top: 6rem;

  background: ${(props) => props.theme['blue-800']};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;

  p {
    font-size: 0.875rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 3.5rem;

    p {
      max-width: 20.43rem;
      text-align: center;
    }
  }
`
