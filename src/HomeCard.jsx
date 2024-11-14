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
            <div className=" mb-5 " style={{marginTop:'18vh'}}>
                <h3 className='text-center mt-5 fw-bold h4 mb-5' style={{fontFamily:'Lato'}}>Shop By Category</h3>
                <div className="row w-100 mx-auto justify-content-md-center text-center justify-content-start" id="cardHome" style={{fontFamily:'Lato'}}>
                    <div className="col-md-2 col-6 mb-1 ">
                        <Link to={'/category'} state='mineral' style={{textDecoration:'none'}}>
                        <div className="card  border-0 border ">
                            <div className="card-header w-auto border-0 p-1 bg-white text-center  text-dark" >
                                <img className="card-img-top"  src="https://fytika.com/cdn/shop/files/FytikaVita365ListingImages_New30Tablets_3.jpg?v=1717785704&width=1946" />
                                {/* <GiMedicines size={68} /> */}
                            </div>
                            <div className="card-body  text-center">
                            Mineral
                        </div>
                        </div>
                        </Link>
                       
                      
                    </div>
                    <div className="col-md-2 col-6 mb-1">
                        <Link to='/category' state='supplement' style={{textDecoration:'none'}} >
                        <div className="card border-0 ">
                            <div className="card-header w-auto bg-white border-0 p-1 text-dark">
                                <img className="card-img-top" src="https://www.verywellhealth.com/thmb/n7XK0aYiIpk1RZV2eC9vmz1Ept0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-vitamins-and-supplements-for-skin-health-tout-0fc0a9fb953e45118e7c0fce71815715.jpg" />
                                {/* <FaPrescriptionBottle size={68} /> */}
                            </div>
                            <div className="card-body  text-center">
                            Supplement
                        </div>
                        </div>
                        </Link>
                       
                        
                    </div>
                    <div className="col-md-2 col-6 mb-1">
                        <Link to='/category' state='diet' style={{textDecoration:'none'}}>
                        <div className="card border-0 ">
                            <div className="card-header w-auto   border-0 p-1  text-white " >
                                <img className="card-img-top" src="https://images.ctfassets.net/222znibi5gto/ew_wysiwyg_fid4662_asset/98a07df4f09600dacdcad1b6bfd84b82/DietarySupplements_89896295_M.jpg" />
                                {/* <BsCupHotFill  size={68}/> */}
                            </div>
                            <div className="card-body  text-center">
                            Diet
                        </div>
                        </div>
                        </Link>
                       
                       
                    </div>
                    <div className="col-md-2 col-6 mb-1">
                        <Link to='/category' state='grocery' style={{textDecoration:'none'}}>
                        <div className="card border-0 ">
                            <div className="card-header w-auto bg-white border-0 p-1  text-dark">
                            {/* <MdLocalGroceryStore  size={68}/> */}

                                <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2023/10/351523658/UT/NP/JG/143402947/homecare-products.jpg" />
                            </div>
                            <div className="card-body  text-center">
                            Grocery
                        </div>
                        </div>
                        </Link>
                      
                        
                    </div>
                    <div className="col-md-2 col-6 mb-1">
                        <Link to='/category' state='diet' style={{textDecoration:'none'}}>
                        <div className="card border-0 ">
                            <div className="card-header w-auto   border-0 p-1  text-white " >
                                <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2020/9/SF/DZ/FH/8260150/sports-supplements-500x500.jpg" />
                                {/* <BsCupHotFill  size={68}/> */}
                            </div>
                            <div className="card-body  text-center">
                            Sports Nutrition
                        </div>
                        </div>
                        </Link>
                       
                       
                    </div>

                    <div className="col-md-2 col-6 mb-1">
                        <Link to='/category' state='health' style={{textDecoration:'none'}}>
                        <div className="card border-0">
                            <div className="card-header w-auto bg-white border-0 p-1 text-dark">
                                <img className="card-img-top" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/HPC/Coop/JulySVD/Zandu_750x375.jpg" />
                                {/* <GiHeartPlus  size={68}/> */}
                            </div>
                            <div className="card-body text-center ">
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