import { memo, type FC } from "react"
import { RoutePath } from "../../app/providers/router/config/routerConfig"
import { type IDataset } from "../../types"
import { AppLink } from "../AppLink/AppLink"
import { Heading } from "../Heading/Heading"
import "./ListItem.scss"

type ListItemProps = {
  item: IDataset
}

export const ListItem: FC<ListItemProps> = memo(({ item }) => {
  return (
    <li className="list-item">
      <Heading tag="h4" text={item.name} />
      <AppLink to={`${RoutePath.chart}${item.id}`}>Перейти</AppLink>
    </li>
  )
})
