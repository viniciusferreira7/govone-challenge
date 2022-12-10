import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

interface PaginationContainerProps {
  active: string
}

export const PaginationContainer = styled(
  RadioGroup.Root,
)<PaginationContainerProps>`
  display: ${(props) => (props.active === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  gap: 1.87rem;

  width: 100%;
  height: 2.5rem;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    gap: 1.68rem;
    height: 2rem;
  }
`

export const PageIndicator = styled(RadioGroup.Item)`
  background: transparent;
  border: none;
  cursor: pointer;

  &:nth-of-type(3) {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 -1rem;

    background: ${(props) => props.theme['blue-300']};
    border-radius: 99999px;

    p {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    p,
    svg {
      color: ${(props) => props.theme['blue-300']};
    }
  }

  &[data-state='checked']:has(p) {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 -1rem;

    background: ${(props) => props.theme['blue-300']};
    border-radius: 99999px;

    p {
      color: ${(props) => props.theme.white};
    }
  }

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme['blue-200']};
  }

  p {
    color: ${(props) => props.theme['gray-900']};
  }

  @media screen and (max-width: 768px) {
    &[data-state='checked']:has(p) {
      width: 2rem;
      height: 2rem;
    }
  }
`
