import styled from 'styled-components'
import { NewsContainer } from '../../styles'
import { DivContainer, HeaderContainer } from '../Header/styles'
import { MainContainer, RelatedContent } from '../Main/styles'
import { NavContainer } from '../Nav/styles'

export const NewsLoadingContainer = styled(NewsContainer)`
  overflow: hidden;
`

export const HeaderLoading = styled(HeaderContainer)``

export const DivLoading = styled(DivContainer)``

export const NavLoading = styled(NavContainer)``

export const IconLoading = styled.div`
  display: flex;
  gap: 1rem;
`
export const MainLoading = styled(MainContainer)``

export const SectionLoading = styled(MainContainer)`
  margin-top: 0.25rem;
`
export const RelatedContentLoading = styled(RelatedContent)``
