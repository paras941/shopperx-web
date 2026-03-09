import { useContext, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom';
import Footer from './Components/Footer/Footer';

// ScrollToTop only for main nav routes, not for cart/wishlist
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Only scroll to top for main navigation routes
    const mainNavRoutes = ['/', '/mens', '/womens', '/kids', '/login', '/checkout'];
    if (mainNavRoutes.includes(pathname) || pathname.startsWith('/product/')) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return null;
}
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Checkout from './Pages/Checkout';
import Wishlist from './Pages/Wishlist';
import Toast from './Components/Toast/Toast';
import { ShopContext } from './Context/ShopContext';
import men_banner from './Components/../assets/assets/Assets/banner_mens.png';
import women_banner from './Components/../assets/assets/Assets/banner_women.png';
import kids_banner from './Components/../assets/assets/Assets/banner_kids.png';

function AppContent() {
  const { toast, hideToast } = useContext(ShopContext);
  
  return (
    <>
      <Navbar/>
      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner ={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}

export default App;

