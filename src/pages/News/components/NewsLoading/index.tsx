import { Skeleton } from '@mui/material'
import {
  DivLoading,
  HeaderLoading,
  IconLoading,
  MainLoading,
  NavLoading,
  NewsLoadingContainer,
  RelatedContentLoading,
  SectionLoading,
} from './styles'

export function NewsLoading() {
  return (
    <NewsLoadingContainer>
      <HeaderLoading>
        <DivLoading>
          <h4>
            <Skeleton width="5.875rem" height="1.0625rem" variant="text" />
          </h4>
          <h1>
            <Skeleton width="63.8125rem" height="6.375rem" variant="text" />
          </h1>
          <p>
            <Skeleton width="11.4375rem" height="1.625rem" variant="text" />
          </p>
          <p>
            <Skeleton width="17.875rem" height="1.625rem" variant="text" />
          </p>
        </DivLoading>
      </HeaderLoading>
      <NavLoading>
        <div>
          <Skeleton width="14.875rem" height="1.5rem" variant="text" />
          <div>
            <Skeleton width="5.3125rem" height="1.25rem" variant="text" />
            <IconLoading>
              <Skeleton width="1.25rem" height="1.015rem" variant="text" />
            </IconLoading>
            <IconLoading>
              <Skeleton width="1.25rem" height="1.015rem" variant="text" />
            </IconLoading>
            <IconLoading>
              <Skeleton width="1.25rem" height="1.015rem" variant="text" />
            </IconLoading>
          </div>
        </div>
      </NavLoading>
      <MainLoading>
        <Skeleton width="65rem" height="26.8125rem" variant="rectangular" />
        <p>
          <Skeleton width="10rem" height="1.375rem" variant="text" />
        </p>
        <SectionLoading>
          <article>
            <Skeleton width="65rem" height="35.375rem" variant="text" />
            <Skeleton width="65rem" height="5.375rem" variant="text" />
            <Skeleton width="65rem" height="25.375rem" variant="text" />
          </article>
        </SectionLoading>
        <RelatedContentLoading>
          <h2>
            <Skeleton width="22.18rem" height="2.375rem" variant="text" />
          </h2>
          <p>
            <Skeleton width="19.625rem" height="1.8125rem" variant="text" />
          </p>
          <section>
            <Skeleton width="21rem" height="27.56rem" variant="text" />
            <Skeleton width="21rem" height="27.56rem" variant="text" />
            <Skeleton width="21rem" height="27.56rem" variant="text" />
          </section>
        </RelatedContentLoading>
      </MainLoading>
    </NewsLoadingContainer>
  )
}
