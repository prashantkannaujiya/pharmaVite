import HomeCard from "./HomeCard";
import "./Home.css";
import data from "./productDatabase";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userCart } from "./App";


import { CarouselItem,Carousel, CarouselCaption } from "react-bootstrap";
function Home() {
  const c = useContext(userCart);
  const navigate = useNavigate();
  const Video = () => {
    return (
      <iframe
        width="100%"
        height="390"
        src={
          "https://www.youtube.com/embed/6x2pBKBjJ7k?playsinline=1&iv_load_policy=3&rel=0&showinfo=0&controls=1&fs=0&start=${start}&autoplay=1&enablejsapi=1&widgetid=1"
        }
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
      />
    );
  };
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

  return (
    <div >
      <div className="mx-auto">
        <Carousel id="carousel" >
          <CarouselItem>
            <CarouselCaption>
              <h1>100% Authentic pills Guaranteed</h1>
            </CarouselCaption>
            <img style={{height:'450px',width:'100%'}} src={'https://hips.hearstapps.com/hmg-prod/images/fresh-sliced-mini-kiwis-royalty-free-image-1690215764.jpg'}/>
          </CarouselItem>
          <CarouselItem>
            <img style={{height:'450px',width:'100%'}} src="https://medlineplus.gov/images/CellsAndDNA_Share.jpg"/>
          </CarouselItem>
        </Carousel>
      </div>
      <HomeCard></HomeCard>

      <div className="covidBanner mx-auto border-light border">
        <p className="fs-3  m-0 pt-5 ms-5">Stay Safe</p>
        <p className="fs-3  ms-5">Wear a Mask</p>
      </div>
      <h3 className="text-center h4" style={{fontFamily:'vogue'}}>TOP SELLING PRODUCTS</h3>
      <div className="h6 text-center" style={{fontFamily:'vogue'}}>100% AUTHENTIC PRODUCTS GUARANTEED</div>
      <div className="row w-100 justify-content-center mb-5 mx-auto">
        {data
          .filter((a, i) => {
            if (i < 3) return a;
          })
          .map((a, i) => {
            return (
              <div className="col-lg-3 m-1">
                <Link style={{ textDecoration: "none" }}>
                  <div className="card w-100 border-0 shadow">
                    <div className="card-header text-center border-0 w-100">
                      <img className="image-fluid" style={{height:'25vh',width:'50%'}} src={data[i].IMAGE} />
                    </div>
                    <div className="card-body fs-5 text-center">
                      <p>{data[i].NAME}</p>
                      <p>
                        <i className="bi bi-currency-rupee"></i>
                        {data[i].Price}
                      </p>
                      <button
                        className="btn btn-success"
                        onClick={(e) => {
                          cartAdd(e, a);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Home;
