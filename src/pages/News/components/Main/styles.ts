import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 4rem;

  & > img,
  div {
    max-width: 65rem;
    width: 100%;
    height: 26.81rem;
    border-radius: 5px;
  }

  & > div {
    background: ${(props) => props.theme['blue-300']};
  }

  & > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};

    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;

    & > img,
    div {
      height: 10rem;
    }

    & > p {
      font-size: 0.6875rem;
    }
  }
`

export const SectionContainer = styled.section`
  max-width: 65rem;
  width: 100%;
  margin-top: 2.5rem;

  p {
    line-height: 32px;
    color: ${(props) => props.theme['gray-900']};
    margin-bottom: 2rem;
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-900']};
  }

  span:last-of-type {
    font-weight: 400;
    color: ${(props) => props.theme['blue-300']};
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 23.25rem;

    p {
      margin-bottom: 1.5rem;

      font-size: 0.875rem;
    }

    span {
      font-size: 0.875rem;
    }
  }
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 4.18rem 0 4rem 0;

  background: ${(props) => props.theme['blue-200']};

  @media screen and (max-width: 768px) {
    margin: 3rem 0;
  }
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

  & > p {
    font-size: 1.125rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-500']};
    margin-bottom: 2.5rem;
  }

  & > section {
    display: flex;
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 23.25rem;
    margin: 0 auto;

    h2 {
      text-align: center;
      font-size: 1.5rem;

      margin-bottom: 0.8rem;
    }

    & > p {
      text-align: center;
      font-size: 1rem;
    }

    & > section {
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`