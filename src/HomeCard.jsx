import { Link, useNavigate } from 'react-router-dom';
import { GiMedicines } from "react-icons/gi";
import { FaPrescriptionBottle } from "react-icons/fa";
import './Home.css'
import { MdLocalGroceryStore } from "react-icons/md";
import { BsCupHotFill } from "react-icons/bs";
import { GiHeartPlus } from "react-icons/gi";
function HomeCard() {
    const navigate=useNavigate()
    return (
        <div>
            <div className="  " style={{marginTop:'15vh'}}>
                <h3 className='text-center mt-5     subHeading' >What do you need today ?</h3>
                <p className='text-center mb-5 fs-4  text-secondary subHeading'>Check out various categories</p>
                <div className="row fw-bold py-2 w-100 mx-auto justify-content-md-around  text-center mt-3 justify-content-start" id="cardHome" style={{}}>
                    <div className="col-md-2 col-6 mb-1 border-0 popup">   
                        <Link to={'/category'} state='mineral' style={{textDecoration:'none'}}>
                        <div className="card  border-0 border ">
                            <div className="card-header w-auto border-0 p-1 bg-white text-center  text-dark" >
                                <img className="card-img-top"  src="https://herbalifeindia.in/wp-content/uploads/2023/02/Multivitamin-Mineral-1.jpg" />
                                {/* <GiMedicines size={68} /> */}
                            </div>
                            <div className="card-body fs-5  text-center">
                            Mineral
                        </div>
                        </div>
                        </Link>
                       
                      
                    </div>
                    <div className="col-md-2 col-6 mb-1 popup">
                        <Link to='/category' state='supplement' style={{textDecoration:'none'}} >
                        <div className="card border-0 ">
                            <div className="card-header w-auto bg-white border-0 p-1 text-dark">
                                <img className="card-img-top" src="https://www.thehimalayanorganics.in/cdn/shop/files/GIMainImage_6.jpg?v=1684134259&width=533" />
                                {/* <FaPrescriptionBottle size={68} /> */}
                            </div>
                            <div className="card-body fs-5  text-center">
                            Supplement
                        </div>
                        </div>
                        </Link>
                       
                        
                    </div>
                    {/* <div className="col-md-2 col-6 mb-1">
                        <Link to='/category' state='diet' style={{textDecoration:'none'}}>
                        <div className="card border-0 ">
                            <div className="card-header w-auto   border-0 p-1  text-white " >
                                <img className="card-img-top" src="https://d3dxkzk9npnkec.cloudfront.net/uploads/images/202403/img_x500_65f2f8e2186060-01201819-70506994.webp" />
                              
                            </div>
                            <div className="card-body  text-center">
                            Diet
                        </div>
                        </div>
                        </Link>
                       
                       
                    </div> */}
                    <div className="col-md-2 col-6 mb-1 popup">
                        <Link to='/category' state='grocery' style={{textDecoration:'none'}}>
                        <div className="card border-0 ">
                            <div className="card-header w-auto bg-white border-0 p-1  text-dark">
                        

                                <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2023/10/351523658/UT/NP/JG/143402947/homecare-products.jpg" />
                            </div>
                            <div className="card-body  fs-5 text-center">
                            Grocery
                        </div>
                        </div>
                        </Link>
                      
                        
                    </div>
                    <div className="col-md-2 col-6 mb-1 popup">
                        <Link to='/category' state='diet' style={{textDecoration:'none'}}>
                        <div className="card border-0 ">
                            <div className="card-header w-auto   border-0 p-1  text-white " >
                                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHbHLcmj9jPaHCDHvtUabb5EFIrYo0EP-rA&s" />
                                {/* <BsCupHotFill  size={68}/> */}
                            </div>
                            <div className="card-body  fs-5 text-center">
                            Sports Nutrition
                        </div>
                        </div>
                        </Link>
                       
                       
                    </div>

                   <div className="col-md-2 col-6 mb-1 popup">
                        <Link to='/category' state='health' style={{textDecoration:'none'}}>
                        <div className="card border-0">
                            <div className="card-header w-auto bg-white border-0 p-1 text-dark">
                                <img className="card-img-top" src="https://www.who.int/images/default-source/wpro/countries/viet-nam/health-topics/thuoc-thiet-yeu.tmb-1024v.jpg?Culture=en&sfvrsn=a0b4a101_16" />

                            </div>
                            <div className="card-body fs-5  text-center ">
                            Health
                        </div>
                        </div>
                        </Link>
                       
                       
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default HomeCard;