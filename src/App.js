import logo from "./logo.svg"
import "./App.css"

import { RedocStandalone } from "redoc"

function App() {
    return (
        <div className="App">
            <RedocStandalone
                specUrl="https://raw.githubusercontent.com/kinboxapp/kinbox-developers/master/spec.yaml"
                options={{
                    nativeScrollbars: true,
                    theme: { colors: { primary: { main: "#316fea" } } },
                }}
            />
        </div>
    )
}

export default App
