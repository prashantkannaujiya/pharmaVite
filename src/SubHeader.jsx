import { Link, useNavigate } from "react-router-dom"
import './header.css'
import { useState } from "react";
function SubHeader(){
   const navigate=useNavigate();
  const [msg,setmsg]=useState('')
    return(
<div className=" " style={{fontSize:'16px',fontFamily:'Lato'}}>
    <nav className="navbar navbar-expand-lg bg-light subh ">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#subHead"  aria-label="Toggle navigation">
      <i class="bi bi-list"></i>
  </button>
      <div className="collapse navbar-collapse  " id='subHead'>
      <ul class="navbar-nav me-auto mb-2 mb- fs-5 fw-normal lg-0 mx-auto flex-fill text-light align-items-center justify-content-center">
        <li class="nav-item mx-5 ">
          <Link to={'/'} style={{textDecoration:'none',color:'black'}} >Home</Link>
        </li>
        <li class="nav-item mx-5">
          <Link to={''} style={{textDecoration:'none',color:'black'}}>About Us</Link>
        </li>
        <li class="nav-item mx-5">
          <Link to={'/store'} style={{textDecoration:'none',color:'black'}}>Store</Link>
        </li>
        <li class="nav-item dropdown mx-5">
          <a  className="nav-link dropdown-toggle " href="" data-bs-toggle="dropdown" style={{color:'black'}}>Shop By</a>
          <ul className="dropdown-menu p-0 border-0" id='dropdownCatalog'>
                <li className="" onClick={() => { setmsg(true) }}>
                  <Link to={'/category'} state='mineral'  className="dropdown-item ">Mineral</Link>
                </li>
                <li className="" onClick={() => { setmsg(true) }}>
                  <Link to={'/category'} state='health'  className="dropdown-item ">Health</Link>
                </li>
                <li onClick={() => { setmsg(true) }}>
                  <Link to={'/category'} state='grocery'  className="dropdown-item ">Grocery Products</Link>
                </li>
                <li onClick={() => { setmsg(true) }}>
                  <Link to={'/category'} state='diet'  className="dropdown-item ">Diet Nutrition</Link>
                </li>
                <li onClick={() => { setmsg(true) }}>
                  <Link className="dropdown-item ">Body & BAth</Link>
                </li>
                <li onClick={() => { setmsg(true) }}>
                  <Link className="dropdown-item ">Sports Nutrition</Link>
                </li>
                <li onClick={() => { setmsg(true) }}>
                  <Link className="dropdown-item ">Supplements</Link>
                </li>

              </ul>

        </li>
        <li className="navbar-item mx-5">
            <Link to={''} style={{textDecoration:'none',color:'black'}}>Contact Us</Link>
        </li>
      </ul>
      </div>
     
    </nav>

</div>
    )
}
export default SubHeader;