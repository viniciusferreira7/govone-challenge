import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { PageIndicator, PaginationContainer } from './styles'

export function Pagination() {
  return (
    <PaginationContainer>
      <PageIndicator value="Voltar" aria-label="Voltar">
        <IoIosArrowBack />
      </PageIndicator>
      <PageIndicator value="1" aria-label="1">
        <p>1</p>
      </PageIndicator>
      <PageIndicator value="2" aria-label="2">
        <p>2</p>
      </PageIndicator>
      <PageIndicator value="3" aria-label="3">
        <p>3</p>
      </PageIndicator>
      <PageIndicator value="Próximo" aria-label="Próximo">
        <IoIosArrowForward />
      </PageIndicator>
    </PaginationContainer>
  )
}
