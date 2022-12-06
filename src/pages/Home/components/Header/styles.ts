import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 12.18rem;

  background: ${(props) => props.theme['blue-300']};
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  max-width: 65rem;
  width: 100%;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 400;
    color: ${(props) => props.theme.white};
  }

  svg {
    width: 4.16rem;
    height: 4.16rem;

    color: ${(props) => props.theme.white};
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1.31rem;
    align-items: center;

    text-align: center;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    svg {
      width: 2.083rem;
      height: 2.083rem;
    }
  }
`
