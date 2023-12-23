import { useState } from 'react';
import './App.scss';
import { Register } from './Components/Register.jsx';
import { Login } from './Components/Login.jsx';
import { Home } from './Components/Home.jsx';
import { About } from './Components/About.jsx';
import { MakeYourOwnEvent } from './Components/MakeYourOwnEvent.jsx';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './Components/NotFound.jsx';
import { AddProducts } from './Components/AddProducts.jsx';
import { AuthProvider } from './context/data/authContext.jsx';
import { ProductDetails } from './Components/ProductDetails.jsx';

 function App() {
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])

    return (
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Add-Products' element={<AddProducts/>}/>
          <Route path='/MakeYourOwn' element={<MakeYourOwnEvent/>}/>
          <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
          <Route component={NotFound}/>
        </Routes>
      </AuthProvider>
    )

  }

export default App;
