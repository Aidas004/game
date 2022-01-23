import './App.css';
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import ArenaPage from "./pages/ArenaPage";
import {HashRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<StartPage />}/>
        <Route path='/main' element={<MainPage />}/>
        <Route path='/shop' element={<ShopPage />}/>
        <Route path='/arena' element={<ArenaPage />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
