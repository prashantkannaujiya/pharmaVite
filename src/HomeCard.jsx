import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
function HomeCard() {
    const navigate=useNavigate()
    return (
        <div>
            <div className=" mb-5">
                <h3 className='text-center mt-5 h4 mb-3' style={{fontFamily:'vogue'}}>SHOP BY CATEGORY</h3>
                <div className="row w-100 mx-auto justify-content-md-center justify-content-start" id="cardHome">
                    <div className="col-md-2 col-6 mb-1">
                        <Link to={'/category'} state='mineral' style={{textDecoration:'none'}}>
                        <div className="card border-0 ">
                            <div className="card-header w-auto border-0 p-1" >
                                <img className="card-img-top"  src="https://5.imimg.com/data5/SELLER/Default/2020/12/OS/QA/GJ/48876012/ginseng-multivitamin-and-multi-mineral-capsules.jpg" />
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
                            <div className="card-header w-auto border-0 p-1">
                                <img className="card-img-top" src="https://www.verywellhealth.com/thmb/n7XK0aYiIpk1RZV2eC9vmz1Ept0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-vitamins-and-supplements-for-skin-health-tout-0fc0a9fb953e45118e7c0fce71815715.jpg" />
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
                            <div className="card-header w-auto border-0 p-1">
                                <img className="card-img-top" src="https://images.ctfassets.net/222znibi5gto/ew_wysiwyg_fid4662_asset/98a07df4f09600dacdcad1b6bfd84b82/DietarySupplements_89896295_M.jpg" />
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
                            <div className="card-header w-auto border-0 p-1">
                                <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/41q1OtfyxNL.jpg" />
                            </div>
                            <div className="card-body  text-center">
                            Grocery
                        </div>
                        </div>
                        </Link>
                      
                        
                    </div>
                    <div className="col-md-2 col-6 mb-1">
                        <Link to='/category' state='health' style={{textDecoration:'none'}}>
                        <div className="card border-0 ">
                            <div className="card-header w-auto border-0 p-1">
                                <img className="card-img-top" src="https://www.sweetnspice.in/web/image/product.template/1608/image_1024?unique=9c22f7e" />
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