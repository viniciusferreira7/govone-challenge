import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const CategorySelectionContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  max-width: 65rem;

  width: 100%;
  margin: 4rem auto 0.5rem auto;

  @media screen and (max-width: 768px) {
    max-width: 20.43rem;
    margin: 2.5rem auto 0.5rem auto;
  }
`

export const Button = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 9rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme['blue-300']};
  border-radius: 12px;

  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['blue-300']};
  text-transform: capitalize;

  cursor: pointer;

  span {
    font-size: 0.875rem;
  }

  svg {
    font-size: 1.2rem;
  }

  &:focus {
    transition: all 0.3s ease-in-out;

    background: ${(props) => props.theme['blue-300']};
    border-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.white};
    outline: none;
  }
`
export const CategoryOptions = styled(Select.Group)`
  padding: 0.5rem;

  background: ${(props) => props.theme['blue-300']};
  color: ${(props) => props.theme.white};
  border: 1px solid transparent;
  border-radius: 12px;

  div:first-of-type {
    margin-bottom: 0.25rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid ${(props) => props.theme.white};
  }
`

export const CategoryItem = styled(Select.Item)`
  padding: 0.25rem;
  text-transform: capitalize;

  cursor: pointer;

  &:focus {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['blue-300']};
    outline: none;

    border-radius: 6px;
  }

  &:last-of-type {
    text-transform: uppercase;
  }
`
