import './App.scss'
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="App">
      <div className="stars-background"></div>
      <div className="container">
        <iframe src="/countdown-timer/game/Build/index.html" width="960" height="600"></iframe>

      </div>
      <Footer />
    </div>
  )
}

export default App
