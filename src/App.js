import logo from "./logo.svg"
import "./App.css"

import { RedocStandalone } from "redoc"

function App() {
    return (
        <div className="App">
            <RedocStandalone specUrl="https://redocly.github.io/redoc/openapi.yaml" />
        </div>
    )
}

export default App
