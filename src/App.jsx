import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <SideMenu />
      <MainContent />
    </div>
  );
}

export default App;
