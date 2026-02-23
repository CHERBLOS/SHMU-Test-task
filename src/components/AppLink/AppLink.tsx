import { memo, type FC, type ReactNode } from "react"
import { Link, type LinkProps  } from "react-router-dom"
import "./AppLink.scss"

interface AppLinkProps extends LinkProps {
  children: ReactNode,
}

export const AppLink: FC<AppLinkProps> = memo(({to, children}) => {
  return <Link to={to} className="app-link">{children}</Link>
})
