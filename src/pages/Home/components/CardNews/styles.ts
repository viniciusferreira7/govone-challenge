import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CardNewsContainer = styled(NavLink)`
  display: flex;
  gap: 2rem;

  max-width: 65rem;
  width: 100%;
  min-height: 16.14rem;

  background: ${(props) => props.theme.white};
  box-shadow: 0px 85px 34px rgba(60, 76, 112, 0.01),
    0px 21px 21px rgba(60, 76, 112, 0.09);
  border-radius: 5px;
  border: 1px solid transparent;
  text-decoration: none;

  div {
    width: 14.12rem;
    height: 16.14rem;
    overflow: hidden;

    img {
      width: 100%;
      height: inherit;
      transition: all 300ms ease-in-out;
    }
  }

  &:hover {
    transition: all 0, 300ms ease-in-out;
    border-color: ${(props) => props.theme['blue-300']};

    img {
      transform: scale(1.3);
    }
  }

  & + & {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0;

    max-width: 20.43rem;

    div {
      width: inherit;
      height: 12.625rem;
      overflow: hidden;
    }
  }
`

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 1.5rem 0;

  h4 {
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-500']};

    margin-bottom: 1rem;
  }

  h2 {
    max-width: 39rem;
    margin-bottom: 0.5rem;

    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    max-width: 42.75rem;
    margin-bottom: 2.5rem;

    color: ${(props) => props.theme['gray-500']};
  }

  @media screen and (max-width: 768px) {
    max-width: 17.43rem;

    text-align: center;

    h4 {
      font-size: 0.8125rem;
    }

    h2 {
      font-size: 1rem;

      margin-bottom: 1rem;
    }

    p {
      font-size: 0.875rem;

      margin-bottom: 1.5rem;
    }
  }
`

export const DataIcon = styled.footer`
  display: flex;
  gap: 0.53rem;
  align-items: center;

  color: ${(props) => props.theme['gray-500']};
  font-size: 0.875rem;

  svg {
    font-size: 0.875rem;
  }

  strong {
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    strong {
      display: none;
    }
  }
`
