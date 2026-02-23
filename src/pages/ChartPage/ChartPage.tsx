import { Navigate, useParams } from "react-router-dom"
import { memo, type FC } from "react"
import ChartBuilder from "../../features/ChartBuilder/ChartBuilder"
import { Heading } from "../../components/Heading/Heading"
import { RoutePath } from "../../app/providers/router/config/routerConfig"


export const ChartPage: FC = memo(() => {
  const {id} = useParams<{id: string}>()

  if (!id) {
    return <Navigate to={RoutePath.main} replace />;
  }

  return (
    <main>
      <header>
        <Heading tag={"h2"} text={`Электромиография`}/>
      </header>
      <ChartBuilder id={id} />
    </main>
  )
})

