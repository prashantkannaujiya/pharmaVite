import { useContext, useEffect, useState } from "react"
import { userCart } from './App';
function Store() {
  var [list, setlist] = useState([])
  const c = useContext(userCart);

  useEffect(() => {



    fetch('https://mlm.jpsw.in/product/get')
      .then(res => res.json())
      .then((data) => {

        const u = JSON.parse(data)
        console.log(u)
        setlist(u)

      }).catch(e => { console.log(e) })


  }, [c.cart])

  function cartAdd(ev, k) {
    k["QTY"] = 1;
    console.log(k);
    if (ev.target.innerHTML == "Add to Cart") {
      var f = false;
      ev.target.innerHTML = "Go to Cart";
      c.cart.filter((a) => {
        if (k.NAME == a.NAME) {
          f = true;

          return (a.QTY = a.QTY + 1);
        }
      });
      c.cart = (!f && [...c.cart, k]) || c.cart;

      ev.target.className = "btn btn-outline-secondary ";
    } else {
      navigate("/cart");
    }

    c.setcart([...c.cart]);
    window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
    console.log(c.cart);
  }
  function AscSort()
  {
    list.sort((a,b)=>{return a.Price*0.9-b.Price*0.9 })
    setlist([...list])
  }
  function DscSort()
  {
   list.sort((a,b)=>{return b.Price*0.9-a.Price*0.9 })
    setlist([...list])
  }
  const defaultPic=(ev)=>{
   
ev.target.src='/error.jpg';
  }
  return (
    <div className="container mt-4">
      <div class="btn-group mb-2" style={{width:'10%'}}>
        <button type="button" class="btn btn-success btn-sm ">Sort</button>
        <button type="button" class="btn btn-success btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu rounded-0 ">
          <li><button className="dropdown-item text-secondary" onClick={AscSort}>Ascending</button></li>
          <li><button className="dropdown-item text-secondary" onClick={DscSort}>Descending</button></li>


        </ul>
      </div>
      <div className=' row  row-cols-3 w-auto mt-2 justify-content-center' >
        {
          list.length != 0 && list.map((a) => {
            return <div className='col-3     h-auto mb-4 ' id='cardProduct'>
              <div className='card border-0 shadow p-0 '>
                <img src={a.IMAGE} className='card-img-top w-50 mx-auto mt-1' onError={(e)=>{e.target.src='https://i.quotev.com/b2gtjqawaaaa.jpg'}} style={{ height: '25vh' }} />


                <div className='card-body text-center'>
                  <p>{a.NAME}</p>
                  <p><i className="bi bi-currency-rupee"></i> <s className="text-danger">{a.Price}</s> <span className="text-info fs-6 fw-bold"><i className="bi bi-currency-rupee"></i>{a.Price * 0.9}</span></p>
                 
                  <p><button className='btn btn-success' onClick={(e) => { cartAdd(e, a) }}>Add to Cart</button></p>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default Store;