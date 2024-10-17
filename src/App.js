// import logo from './logo.svg'
import MainContext from "./MainContent"
import Join from "./Join"
import Login from "./Login"
import NextPage from "./NextPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<MainContext/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/signup" element={<Join/>}></Route>
           <Route path="/nextpage" element={<NextPage/>}></Route>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
