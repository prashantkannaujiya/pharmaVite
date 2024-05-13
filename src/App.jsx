import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Store from './Store'
import Checkout from './Checkout'
import Category from './Category'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
export const userCart=createContext();
export const userInfo=createContext()
function App() {
 const [cart,setcart]=useState([]);
 const [user,setuser]=useState(null)
 useEffect(()=>{
  let u=JSON.parse(window.localStorage.getItem('cartlist')) || [];
  console.log(u)
  setcart(u)

},[])
  return (
    <>
    <div className='App' >
      <userInfo.Provider value={{user,setuser}} >
    <userCart.Provider value={{cart,setcart}}>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
        <Route path='/store' element={<Store></Store>}/>
        <Route path='/checkout' element={<Checkout></Checkout>}/>
        <Route path='/category' element={<Category></Category>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
      </Routes>
<Footer></Footer>
    </userCart.Provider>
    </userInfo.Provider>
     </div>
          </>
  )
}

export default App
