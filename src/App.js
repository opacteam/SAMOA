import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Component from "./components/Component";
import GenericPage from "./pages/GenericPage";
import HomeTemplate from './templates/Home'
import ArchivesSearchTemplate from "./templates/ArchiveSearch";
function App() {
  return (
    <div className="App">
      <GenericPage template={ArchivesSearchTemplate} />
    </div>
  );
}

export default App;
