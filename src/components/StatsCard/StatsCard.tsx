import { memo, type FC } from "react"
import type { StatsType } from "../../types"
import "./StatsCard.scss"


type StatsCardProps = {
  statName: string,
  statData: StatsType | number
}

export const StatsCard: FC<StatsCardProps> = memo(({ statName, statData }) => {
  return (
    <div className="stats-card">
      <p className="stats-caption">{statName}</p>
      <ul className="stats-list">
        {typeof statData === "number" ? <li>{statData}</li> : (
          Object.entries(statData)
            .map(([name, value]) => 
              <li className="stats-list-item" key={`${name}_${value}`}>
                <span>{name}</span><span>{value.toFixed(2)}</span>
              </li>
            )
        )}
      </ul>
    </div>
  )
})