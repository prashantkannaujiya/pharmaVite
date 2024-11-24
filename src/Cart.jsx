import { useContext, useEffect, useState } from "react";
import {  userCart } from "./App";
import { Link, useNavigate } from "react-router-dom";



const Cart = () => {
  const [list, setlist] = useState([]);
  const [sum, setsum] = useState(0);
 
  const c = useContext(userCart);
  const navigate = useNavigate();
  useEffect(() => {
    setlist(c.cart);
    let s = 0;
    c.cart.forEach((a) => {
      s = s + a.Price * a.QTY;
    });
    setsum(s);
  }, [c.cart]);

  function addQuantity(k) {
    c.cart.forEach((a) => {
      if (a.NAME == k.NAME) {
        a.QTY = a.QTY + 1;
      }
    });
    console.log(c.cart);
    c.setcart([...c.cart]);
    window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
  }
  function reduceQuantity(k) {
    if (k.QTY > 1) {
      c.cart.forEach((a) => {
        if (a.NAME == k.NAME) {
          a.QTY = a.QTY - 1;
        }
      });
      c.setcart([...c.cart]);
      window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
    } else {
      Swal.fire({text:"Quantity already minimum, try removing it!"});
    }
  }

  function remove(k) {
    c.cart = c.cart.filter((a) => {
      if (a.NAME != k.NAME) {
        return a;
      }
    });

    c.setcart([...c.cart]);
    console.log(c.cart);
    window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
  }
  return (
    <div className="container"  style={{fontFamily:'"Lato",sans-serif'}}>
      
       
        <div className="container-fluid mt-3 mb-3">
     <p className="cartel  mx-auto sm  p-2  text-white " style={{backgroundImage:'linear-gradient(to right,green,white)'}}>
      <ul><li>15% discount across medicines</li>
      <li>Free discount on orders above <i className="bi bi-currency-rupee"></i> 2000</li>
      </ul></p>
    
      {list.map((a) => {
            return (
              <div className="cartel mx-auto px-3 bg-white" >
                <div className=" w-auto float-end text-secondary">
                  <i
                    className="bi bi-x-square fw-bold"
                    onClick={() => {
                      remove(a);
                    }}
                  ></i>
                </div>
                <div className="  d-md-flex justify-content-start align-items-center  mb-1 h-auto">
                <div className="w-25 mx-auto text-center">
                    <img className=" img-fluid p-1" src={a.IMAGE} style={{height:'18vh',width:'fit-content'}} />
                </div>

                  <div className=" card text-secondary border-0 p-0 flex-fill">
                    
                    <div className="card-body row justify-content-between align-items-start">
                      <div className="col-md">
                        {a.NAME}
                      </div>
                      <div className="col-md ">
                        <i className="bi bi-currency-rupee"></i>
                        {a.Price}
                      </div>
                      <div className="col-md  ">
                        <span className="w-50 me-2 text-wrap"> {a.QTY}</span>
                        <span className="quantity d-inline-flex flex-column ">
                          <span
                            className="bi bi-caret-up-square-fill p-0 m-0"
                            onClick={() => {
                              addQuantity(a);
                            }}
                          ></span>
                          <span
                            className="bi bi-caret-down-square-fill p-0 mt-0"
                            onClick={() => {
                              reduceQuantity(a);
                            }}
                          ></span>
                        </span>
                      </div>
                      <div className="col-md">
                        Total : <i className="bi bi-currency-rupee"></i> {a.QTY*a.Price}
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            );
          })}
        
      
      <div className="mx-auto text-end text-secondary border-top border-bottom p-2 w-100 bg-light fw-">
        Subtotal : <i className="bi bi-currency-rupee"></i> {sum}
      </div>
      </div>
      <div className="container w-auto mt-0 text-start mx-auto">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Continue Shopping
        </Link>
        <button
          onClick={() => {
            c.cart.length == 0 ? alert("Cart is Empty") : navigate("/checkout");
          }}
          className="btn btn-success ms-2"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Cart;
