// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import {Routes,Route} from "react-router-dom";
import ShowCategoryWiseProduct from './Pages/ShowCategoryWiseProduct';
import BestSelling from './Pages/BestSelling';
import SearchedItems from './Pages/SearchedItems';
import Login from "./Pages/Login";
import SingleProduct from './Pages/SingleProduct';
// import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
    {/* <AnimatePresence mode='wait'> */}

    <Navbar/>
     <Routes>
    {/*    <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/addnewproduct' element={<AddProduct/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/approveNewProducts' element={<ApproveProducts/>}/>
        <Route exact path='product/openproduct/:id' element={<SingleProduct/>}/>
        <Route path="*" element={<Error404 />} />
      <Footer/> */}
      <Route path="/" element={<Home />} />
      <Route path="/bestselling" element={<BestSelling/>}/>
      <Route exact path='showcategorywiseproduct/:category' element={<ShowCategoryWiseProduct/>}/>
      <Route exact path='searcheditems/:element' element={<SearchedItems/>}/>
      <Route path="/searcheditems/:element/singleproduct/:id" element={<SingleProduct />} />
      <Route path='/login' element={<Login/>}/>
      </Routes>
      {/* <Home/> */}
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
