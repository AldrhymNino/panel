import Header from "./components/Header.jsx"
import Nav from "./components/Nav.jsx"
import Main from "./components/Main.jsx"

import "./styles/app.css";

function App() {

  return (
    <div className="app">
      <Nav />
      <div className="container">
        <Header />
        <Main />
      </div>

    </div>
  )
}

export default App
