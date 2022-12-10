import {
  Button,
  CategoryItem,
  CategoryOptions,
  CategorySelectionContainer,
} from './styles'
import * as Select from '@radix-ui/react-select'
import { MdOutlineArrowDropDown } from 'react-icons/md'

export default function CategorySelection() {
  return (
    <CategorySelectionContainer>
      <Button>
        <Select.Value placeholder="Categoria" />
        <Select.Icon>
          <MdOutlineArrowDropDown />
        </Select.Icon>
      </Button>
      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton>
            <MdOutlineArrowDropDown />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <CategoryOptions>
              <CategoryItem value="maça">
                <Select.ItemText>Maça</Select.ItemText>
                <Select.ItemIndicator>
                  <MdOutlineArrowDropDown />
                </Select.ItemIndicator>
              </CategoryItem>
              <CategoryItem value="Banana">
                <Select.ItemText>Banana</Select.ItemText>
                <Select.ItemIndicator>
                  <MdOutlineArrowDropDown />
                </Select.ItemIndicator>
              </CategoryItem>

              <CategoryItem value="Laranja">
                <Select.ItemText>Laranja</Select.ItemText>
                <Select.ItemIndicator>
                  <MdOutlineArrowDropDown />
                </Select.ItemIndicator>
              </CategoryItem>
            </CategoryOptions>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <MdOutlineArrowDropDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </CategorySelectionContainer>
  )
}
