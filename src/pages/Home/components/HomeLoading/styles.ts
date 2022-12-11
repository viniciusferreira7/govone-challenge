import styled from 'styled-components'

export const HomeLoadingContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

export const SkeletonGroup = styled.div`
  display: flex;
  gap: 0.15rem;

  &:last-of-type {
    margin-top: 2rem;
  }
`
