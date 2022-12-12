import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 18.6875rem;

  background: ${(props) => props.theme['blue-300']};
`
export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 65rem;
  width: 100%;

  color: ${(props) => props.theme.white};

  h4 {
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: uppercase;

    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 51.2px;

    max-width: 63rem;
    margin-bottom: 1.5rem;
  }

  p {
    strong {
      font-weight: 600;
    }
  }

  p + p {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 20.4375rem;
    padding: 2.5rem 1.5rem;
    text-align: center;

    h4 {
      font-size: 0.81rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`
