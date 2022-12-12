import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
import Usercard from "./components/Usercard/Usercard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Usercard />
    </div>
  );
}

export default App;
