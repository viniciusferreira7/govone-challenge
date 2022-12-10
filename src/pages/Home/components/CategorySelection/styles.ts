import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const CategorySelectionContainer = styled(Select.Root)``

export const Button = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 7.4345rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme['blue-300']};
  border-radius: 12px;

  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['blue-300']};

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
`

export const CategoryItem = styled(Select.Item)`
  padding: 0.25rem;

  &:focus {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['blue-300']};
    outline: none;

    border-radius: 6px;
  }
`
