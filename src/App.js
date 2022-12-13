import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
import Usercard from "./components/Usercard/Usercard";
import "./App.css";
import { useState } from "react";
function App() {
  const [data, saveData] = useState({});

  return (
    <div className="App">
      <Header />
      <Searchbar saveData={saveData} />
      <Usercard data={data} />
    </div>
  );
}

export default App;
