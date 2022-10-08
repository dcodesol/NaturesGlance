import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Slider from './Home/Slider';
import Cards from './Home/Cards';
import { Routes, Route } from "react-router-dom"
import Descrip from './Home/Descrip';


function App() {
  return (
    <>
      {/* <Routes> */}
      {/* <Route path="/head" element={<Header />} /> */}
      <Header />
      <Slider />
      <Cards />
      <Descrip />
      {/* </Routes> */}

    </>
  );
}

export default App;
