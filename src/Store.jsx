import { useContext, useEffect, useState } from "react";
import { userCart } from './App';

function Store() {
  const [list, setlist] = useState([]);
  const c = useContext(userCart);

  useEffect(() => {
    // Fetch JSON dynamically from public folder
    fetch('/med.json') // Ensure med.json is in the public folder
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setlist(data.Sheet1); // Directly set the data
      })
      .catch((e) => {
        console.error("Error fetching JSON:", e);
      });
  }, [c.cart]);

  function cartAdd(ev, k) {
    k["QTY"] = 1;
    if (ev.target.innerHTML === "Add to Cart") {
      let exists = false;
      ev.target.innerHTML = "Go to Cart";

      c.cart.forEach((a) => {
        if (k.NAME === a.NAME) {
          exists = true;
          a.QTY += 1;
        }
      });

      if (!exists) {
        c.cart = [...c.cart, k];
      }

      ev.target.className = "btn btn-outline-secondary";
    } else {
      navigate("/cart"); // Make sure navigate is properly imported
    }

    c.setcart([...c.cart]);
    window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
  }

  function AscSort() {
    const sorted = [...list].sort((a, b) => a.Price * 0.9 - b.Price * 0.9);
    setlist(sorted);
  }

  function DscSort() {
    const sorted = [...list].sort((a, b) => b.Price * 0.9 - a.Price * 0.9);
    setlist(sorted);
  }

  const defaultPic = (ev) => {
    ev.target.src = 'https://i.quotev.com/b2gtjqawaaaa.jpg';
  };

  return (
    <div className="container mt-4">
      <div className="btn-group mb-2" style={{ width: '10%' }}>
        <button type="button" className="btn btn-success btn-sm">Sort</button>
        <button type="button" className="btn btn-success btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu rounded-0">
          <li><button className="dropdown-item text-secondary" onClick={AscSort}>Ascending</button></li>
          <li><button className="dropdown-item text-secondary" onClick={DscSort}>Descending</button></li>
        </ul>
      </div>

      <div className='row row-cols-3 w-auto mt-2 justify-content-center'>
        {list.length > 0 ? list.map((a, index) => (
          <div className='col-4 h-auto mb-4' key={index}>
            <div className='card border-0 shad p-0'>
              <img
                src={a.Image}
                className='card-img-top w-50 mx-auto mt-1'
                onError={defaultPic}
                alt={a.Name}
                style={{ height: '25vh' }}
              />
              <div className='card-body text-center text-truncate'>
                <p>{a.Name}</p>
                <p>
                  <i className="bi bi-currency-rupee"></i>
                  <s className="text-danger">{}</s>
                  <span className="text-info fs-6 fw-bold">
                    <i className="bi bi-currency-rupee"></i>{}
                  </span>
                </p>
                <p><button className='btn btn-success' onClick={(e) => cartAdd(e, a)}>Add to Cart</button></p>
              </div>
            </div>
          </div>
        )) : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Store;
