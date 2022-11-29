import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Component from "./components/Component";
import Home from "./pages/Home";
import HomeTemplate from './templates/Home'
function App() {
  return (
    <div className="App">
      <Home template={HomeTemplate} />
    </div>
  );
}

export default App;
