import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'

import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

import { MainContext } from './context/context';


const App = () => {
  const { theme } = useContext(MainContext);

  return (
    <div className={`App ${theme}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
