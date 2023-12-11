import InputForm from './components/InputForm/InputForm';
import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import OutputForm from './components/OutputForm/OutputForm';
import Cart from './components/Cart/Cart';
import ContextProvider from './components/store/ContextProvider';

function App() {
  const [data,setData] = useState([]);
  const getDataHandler = (product) => {
    setData((prevData) => [...prevData, { id: Date.now(), ...product }]);
  };
  
  console.log("APP",data)
  return (
    <ContextProvider>
    <Cart/>
    <Header/>
    <InputForm getData={getDataHandler}/>
    <OutputForm productDetail={data}/>
    </ContextProvider>
  );
}

export default App;
