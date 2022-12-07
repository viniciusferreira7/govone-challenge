import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 4rem;

  img {
    max-width: 65rem;
    width: 100%;
    height: 26.81rem;
    border-radius: 5px;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};

    margin-top: 1rem;
  }
`

export const SectionContainer = styled.section`
  max-width: 65rem;
  width: 100%;
  margin-top: 2.5rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    line-height: 32px;
    color: ${(props) => props.theme['gray-900']};
    margin-bottom: 2rem;
  }

  span {
    font-weight: 600;
    color: ${(props) => props.theme['gray-900']};
  }

  span:last-of-type {
    font-weight: 400;
    color: ${(props) => props.theme['blue-300']};
  }
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 4.18rem 0 4rem 0;

  background: ${(props) => props.theme['blue-200']};
`

export const RelatedContent = styled.section`
  max-width: 65rem;
  width: 100%;

  text-align: left;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-900']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-500']};
    margin-bottom: 2.5rem;
  }
`
