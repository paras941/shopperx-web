import './App.css'
import Navbar from './Components/Navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

