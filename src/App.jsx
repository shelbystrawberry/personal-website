import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home"
import About from "./components/about/About"
import Creations from "./components/creations/Creations"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Home />
        <About />
        <Creations />
      </div>
    </div>
  );
}

export default App;
