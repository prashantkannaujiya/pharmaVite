import { useContext } from "react";
import SubHeader from "./SubHeader";
import { userCart, userInfo } from "./App";
import './header.css'
import logo from './logo.png'
import { Link, useNavigate } from "react-router-dom";
function Header() {

  const u=useContext(userInfo)
    const c=useContext(userCart)
    const navigate=useNavigate()
const userDetail=()=>{
u.user ? '' : navigate('/login')
} 
  return (
    <div className="head">
      <div className=" text-light" >
        <nav className="navbar navbar-expand-md  justify-content-startt" style={{height:'15vh'}}>
          <div className="container-flui text-light ">
            <a
              className="navbar-brand fs-1 text-dark"
              href=""
              
              id="logo"
            >
             
            <span className="fw-bold text-light"> Just Meds</span> 
            </a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainHead"  aria-label="Toggle navigation">
      <i class="bi bi-list text-white"></i>
  </button>
          <div className="collapse navbar-collapse justify-content-end me-4 align-items-baseline w-100  flex-fill ">
            <ul className="navbar-nav " id="mainHead">
              <li className="navbar-item mx-2">
                <div className="input-group">
                  <input type="text" className="form-control" style={{width:'81%'}} />
                  <button className="btn btn-dark">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </li>
              <li className="navbar-item mx-2 fs-4">
                <Link style={{textDecoration:'none',color:'white'}} to={'/cart'}>
                <i className="bi bi-bag" ></i><small className="cartNum rounded-circle fw-bold  bg-danger text-white">{c.cart.length}</small>
              
                </Link>
               </li>
              <li className="navbar-item mx-2 fs-4" onClick={userDetail}>
              <Link style={{textDecoration:'none',color:'white'}} to={userDetail}><i class="bi bi-person"></i></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <SubHeader></SubHeader>
    </div>
  );
}
export default Header;
