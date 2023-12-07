import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import NavSearch from './components/NavSearch';
import Countries from './components/Countries';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleCountrie from './components/SingleCountrie';
import { data } from './data';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={'/'} element={<Countries />} />
          <Route path={'SingleCountrie/:id'} element={<SingleCountrie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
