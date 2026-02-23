import { memo, type FC } from "react"
import type { IDataset } from "../../types"
import { Heading } from "../Heading/Heading"
import { ListItem } from "../ListItem/ListItem"
import "./List.scss"

type ListProps = {
  items: IDataset[],
  listTitle: string
}

export const List: FC<ListProps> = memo(({ items, listTitle }) => {
  if (!items.length) {
    return (
      <section className="wrapper">
        <Heading tag="h4" text="Список пуст" />
      </section>
    )
  }

  return (
    <section className="wrapper">
      <ul className="list">
        <li className="list-header" key="header">
          <Heading tag="h4" text={listTitle} />
        </li>
        {items.map(item => <ListItem item={item} key={item.id} />)}
      </ul>
    </section>
  )
})