import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Creations from "./components/creations/Creations"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="sections">
        <Home />
        <About />
        <Creations />
      </div>
    </div>
  );
}

export default App;
