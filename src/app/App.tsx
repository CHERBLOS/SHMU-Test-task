import { Suspense, type FC } from "react"
import "./App.scss"
import { AppRouter } from "./providers/router/ui/AppRouter"

const App: FC = () => {
  return (
    <div className="app">
      <Suspense fallback="Loading...">
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
