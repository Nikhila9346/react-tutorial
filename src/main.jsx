import react from "react"
import reactdom from "react-dom/client"
import App from "./App"

console.log(react)
console.log(reactdom)

// reactdom.createRoot(document.getElementById("root")).render(<h1>Riya Evaru?</h1>)
reactdom.createRoot(document.getElementById("root")).render(<App/>) 