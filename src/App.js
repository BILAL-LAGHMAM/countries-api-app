import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import NavSearch from './components/NavSearch';
import Countries from './components/Countries';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleCountrie from './components/SingleCountrie';
import { data } from './data';
import { useState } from 'react';
function App() {
  const [valueMode, setValueMode] = useState("")
  const getMode = (data) => {
    setValueMode(data);
  }
  return (
    <div className={valueMode ? "bg-Dark-app":''}>
      <BrowserRouter>
        <Nav mode={getMode} />
        <Routes>
          <Route path={'/'} element={<Countries modeIs={valueMode} />} />
          <Route path={'SingleCountrie/:id'} element={<SingleCountrie modeIs={valueMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;