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
            <img style={{height:'450px',width:'100%',objectFit:'cover'}} className="img-fluid" src={'https://blog.acharya.ac.in/wp-content/uploads/2023/05/pharmacy.jpg'}/>
          </CarouselItem>
          <CarouselItem>
            <img style={{height:'450px',width:'100%'}} src="https://www.who.int/images/default-source/wpro/countries/viet-nam/health-topics/thuoc-thiet-yeu.tmb-1024v.jpg?Culture=en&sfvrsn=a0b4a101_16"/>
          </CarouselItem>
        </Carousel>
      </div>
      <HomeCard></HomeCard>

      <div className="covidBanner mx-auto border-light fw-bold text-white border" style={{fontFamily:'"Lato",sans-serif'}}>
        <p className="display-1 fw-bold m-0 pt-5 mt-5 ms-5">Stay Safe</p>
        <p className="display-1 fw-bold  ms-5">Wear a Mask</p>
      </div>
      <h3 className="text-whte fw-  subHeading"  style={{fontFamily:'"Arial",sans-serif'}}>Top Selling Products</h3>
      {/* <div className="h6 text-center" style={{fontFamily:'Lato'}}>100% Authentic Products Guaranteed</div> */}
      <div className="row w-100 justify-content-around bg-liht mt-1 mb- mx-auto py-" style={{marginBottom:"20vh"}}>
        {data
          .filter((a, i) => {
            if (i < 5) return a;
          })
          .map((a, i) => {
            return (
              <div className="col-lg-2 m-  mx- w-aut" style={{fontFamily:'"Lato",sans-serif'}}>
                <Link style={{ textDecoration: "none" }}>
                  <div className="card  w-100 border-0 shado">
                    <div className="card-header text-center bg-white border-0 w-100">
                      <img className="image-fluid" style={{height:'25vh',width:'70%'}} src={data[i].IMAGE} />
                    </div>
                    <div className="card-body fs-6 text-center">
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
