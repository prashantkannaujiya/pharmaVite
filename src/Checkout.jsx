import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userCart } from "./App";

function Checkout() {
  const [list, setlist] = useState([]);
  const [sum, setsum] = useState(0);
  const [customer,setcustomer]=useState({name:'',lastname:'',email:'',address:'',state:'',city:'',pin:''})
  const c = useContext(userCart);
  const navigate = useNavigate();
  useEffect(() => {
    setlist(c.cart);
    let s = 0;
    c.cart.forEach((a) => {
      s = s + a.price * a.QTY;
    });
    setsum(s);
  }, [c.cart]);
  const placeOrder=(ev)=>{
    console.log('in placeorder')
    ev.preventDefault();
    for(let key in customer)
    {
      if(customer[key]=='')
      {
        alert('Input all required fields')
        break;
      }
    }
    // alert(customer)
  }
  return (
    <div className="productDisplay container text-center mb-5"  style={{fontFamily:'"Lato",sans-serif'}}>
      <h3 className="text-secondary  mt-3 text-start mb-5" >
        Preview your order and Pay
      </h3>
      <div className="d-md-flex mb-4">
        <div
          className="container w-50 text-start mx-0 align-self-start mb-4 bg-white p-3"
        
        >
          <form id="form1">
            <div className="  text-start">
              <h3 className=" fs-4  text-start">Your Contact</h3>
              <input
                type="email"
                placeholder="email"
                className="form-control m-1"
                onChange={(e)=>{setcustomer({...customer,email:e.target.value})}}
                
              />
              <input type="checkbox" className="form-check-input m-1" />
              <label className="form-check-label m-1 pb-5">
                We'll send you offers
              </label>
            </div>

            <h3 className="fs-4 text-start ">Delivery</h3>
            <div className="row  mb-1">
              <div className="col">
                <input
                  type="text"
                  className=" form-control "
                  placeholder="First Name"
                  onChange={(e)=>{setcustomer({...customer,name:e.target.value})}}
                 
                />
              </div>
              <div className="col ">
                <input
                  type="text"
                  className=" form-control "
                  placeholder="Last Name"
                  onChange={(e)=>{setcustomer({...customer,lastname:e.target.value})}}
                
                />
              </div>
            </div>

            <div className="  mb-1">
              <input
                type="text"
                className="form-control "
                placeholder="Address"
                onChange={(e)=>{setcustomer({...customer,address:e.target.value})}}
             
              />{" "}
            </div>
            <div className="row ">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  onChange={(e)=>{setcustomer({...customer,city:e.target.value})}}
                
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  onChange={(e)=>{setcustomer({...customer,state:e.target.value})}}
                
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pin Code"
                  onChange={(e)=>{setcustomer({...customer,pin:e.target.value})}}
              
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-75 mb-5 " style={{height:'50vh'}} >
          <div className="h-100 w-75 mx-auto overflow-scroll ">
            {list.length != 0 &&
              list.map((a) => {
                return (
                  <div className="d-flex px-2 justify-content-between align-items-center bg-white mb-1 ">
                    <p className="w-50 text-start">
                      <img
                        className="w-25 vh-25 mt-1 me-2"
                        src={a.IMAGE}
                        style={{ height: "9vh" }}
                      />
                      <span>{a.NAME}</span>
                    </p>
                    <p>QTY : {a.QTY}</p>
                    <p>
                      {" "}
                      <i className="bi bi-currency-rupee"></i> {a.price}
                    </p>
                  </div>
                );
              })}
          </div>
          <p className="d-flex justify-content-between w-75 mx-auto fs-5 ">
            <span>Total :</span>
            <span>
              <i className="bi bi-currency-rupee"></i>
              {sum}
            </span>{" "}
          </p>
        </div>
      </div>
      <button className="btn btn-success"  onClick={(e)=>{placeOrder(e)}}>Confirm Order & Book</button>
    </div>
  );
}
export default Checkout;
