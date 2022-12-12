import {
  Button,
  CategoryItem,
  CategoryOptions,
  CategorySelectionContainer,
} from './styles'
import * as Select from '@radix-ui/react-select'
import { MdCheck, MdFilterList, MdOutlineArrowDropDown } from 'react-icons/md'
import { usePageInformation } from '../../../../hooks/UsePageInformation'

interface Category {
  category_titulo: string
  category_slug: string
}

export function CategorySelection() {
  const { filterByCategory } = usePageInformation()

  const allCategory: Category[] = [
    { category_titulo: 'auxilio', category_slug: 'auxilio3612' },
    { category_titulo: 'finanças', category_slug: 'categoria-da-vaval6157' },
    { category_titulo: 'saúde', category_slug: 'testando7140' },
    { category_titulo: 'seguros', category_slug: 'seguros7303' },
    { category_titulo: 'casa própria', category_slug: 'teste6933' },
    { category_titulo: 'auxílio moradia', category_slug: 'teste7642' },
  ]

  return (
    <CategorySelectionContainer title="Escolher categoria">
      <Select.Root onValueChange={(event) => filterByCategory(event)}>
        <Button>
          <Select.Value placeholder="Categoria" />
          <Select.Icon>
            <MdFilterList />
          </Select.Icon>
        </Button>
        <Select.Portal>
          <Select.Content>
            <Select.ScrollUpButton>
              <MdFilterList />
            </Select.ScrollUpButton>
            <Select.Viewport>
              <CategoryOptions>
                <Select.Label>Categorias</Select.Label>

                {allCategory.map((category) => (
                  <CategoryItem
                    key={category.category_titulo}
                    value={category.category_slug}
                  >
                    <Select.ItemText>
                      {category.category_titulo}
                    </Select.ItemText>
                    <Select.ItemIndicator>
                      <MdCheck />
                    </Select.ItemIndicator>
                  </CategoryItem>
                ))}

                <CategoryItem value="sem filtro">
                  <Select.ItemText>Sem filtro</Select.ItemText>
                  <Select.ItemIndicator>
                    <MdCheck />
                  </Select.ItemIndicator>
                </CategoryItem>
              </CategoryOptions>
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton">
              <MdOutlineArrowDropDown />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </CategorySelectionContainer>
  )
}
