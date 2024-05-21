import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import { MyContextProvider } from './MyContextProvider';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
       <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/search" element={<Search/>}></Route>
      </Routes>
      </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;
