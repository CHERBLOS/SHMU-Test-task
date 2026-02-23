import { Suspense } from "react"
import "./App.scss"
import { AppRouter } from "./providers/router/ui/AppRouter"

function App() {
  return (
    <div className="app">
      <Suspense fallback="Loading...">
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
