
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Search from "./components/Search";
import Categories from "./components/categories";
import "bootstrap/dist/css/bootstrap.css";


import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
