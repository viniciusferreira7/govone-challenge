import styled from 'styled-components'

export const CardNewsContainer = styled.div`
  max-width: 21rem;
  width: 100%;
  min-height: 27.5625rem;
  padding-bottom: 1.5rem;

  box-shadow: 0px 85px 34px rgba(60, 76, 112, 0.01),
    0px 21px 21px rgba(60, 76, 112, 0.09);
  border-radius: 4px;
  border: 1px solid transparent;
  background: ${(props) => props.theme.white};

  &:hover {
    transition: all 300ms ease-in-out;
    transform: scale(1.1);
    z-index: 999;
    border-color: ${(props) => props.theme['blue-300']};
  }

  img {
    width: 21rem;
    height: 13.875rem;
    margin-bottom: 1.5rem;
  }

  div {
    max-width: 18rem;
    margin: 0 auto;
  }

  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 1.125em;
    margin: 0 auto;
    margin-bottom: 1rem;

    p {
      text-transform: uppercase;
      font-size: 0.875rem;
    }
  }

  h2 {
    margin-bottom: 2.5rem;

    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-900']};
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.875rem;
    color: ${(props) => props.theme['blue-300']};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['blue-800']};
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 20.4375rem;
    min-height: 23.4375rem;
    margin-bottom: 0 !important;

    &:last-of-type {
      margin-bottom: 6rem;
    }

    &:hover {
      transition: none;
      transform: scale(1);
      z-index: 999;
      border-color: transparent;
    }

    img {
      max-width: 20.4375rem;
      height: 12.625rem;
    }

    div > p {
      font-size: 0.8125rem;
    }

    div > h2 {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    a {
      font-size: 0.8125rem;
    }
  }
`

export const DataIcon = styled.footer`
  display: flex;
  gap: 0.286rem;
  align-items: center;

  color: ${(props) => props.theme['gray-500']};
  font-size: 0.8125rem;

  svg {
    font-size: 0.8125rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
