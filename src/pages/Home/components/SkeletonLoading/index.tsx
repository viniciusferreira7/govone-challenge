import { Skeleton } from '@mui/material'
import { SkeletonGroup, SkeletonLoadingContainer } from './styles'

export function SkeletonLoading() {
  return (
    <SkeletonLoadingContainer>
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
    </SkeletonLoadingContainer>
  )
}
