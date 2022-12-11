import { Skeleton } from '@mui/material'
import { SkeletonGroup, HomeLoadingContainer } from './styles'

export function HomeLoading() {
  return (
    <HomeLoadingContainer>
      <SkeletonGroup>
        <Skeleton width="14.12rem" height="16.14rem" variant="rectangular" />
        <Skeleton width="50.88rem" height="16.14rem" variant="rectangular" />
      </SkeletonGroup>
      <SkeletonGroup>
        <Skeleton width="14.12rem" height="16.14rem" variant="rectangular" />
        <Skeleton width="50.88rem" height="16.14rem" variant="rectangular" />
      </SkeletonGroup>
      <SkeletonGroup>
        <Skeleton width="14.12rem" height="16.14rem" variant="rectangular" />
        <Skeleton width="50.88rem" height="16.14rem" variant="rectangular" />
      </SkeletonGroup>
    </HomeLoadingContainer>
  )
}
