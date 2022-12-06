import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3.5rem;

  box-shadow: 0px 85px 34px rgba(60, 76, 112, 0.01),
    0px 21px 21px rgba(60, 76, 112, 0.09);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 65rem;
    width: 100%;

    section {
      display: flex;
      gap: 1.625rem;
    }
  }

  @media screen and (max-width: 768px) {
    div {
      justify-content: center;
      gap: 1.25rem;

      section {
        gap: 1.25rem;
      }
    }
  }
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme['gray-300']};
  text-transform: uppercase;

  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    color: ${(props) => props.theme['blue-300']};
  }

  span {
    width: 5.43rem;
  }

  @media screen and (max-width: 768px) {
    span {
      display: none;
    }
  }
`

export const Share = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-500']};

    margin-right: -0.125rem;
  }

  svg {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-300']};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['blue-300']};
    }
  }

  @media screen and (max-width: 768px) {
    gap: 1.25rem;

    span {
      display: none;
    }
  }
`
