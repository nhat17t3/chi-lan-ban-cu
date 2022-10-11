import React, { Component, useEffect, useState } from "react";
import { getListProduct } from '../../../actions/productActions';
import Carousel from './Carousel';
import Phoneitem from './phone-info';
import { Link, NavLink, useParams } from "react-router-dom";
import { generatePublicUrl } from "../../../urlConfig";
import { addToCart } from "../../../actions/cartAction";

import { useDispatch, useSelector } from "react-redux";

 const  Home = ()  => {

  const products = useSelector((state) => state.product);
//   const [product, setProduct] = useState({});
 

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getProductByCategory(id));
    dispatch(getListProduct());
    window.scrollTo(0, 0);
  }, [dispatch]);
  const handleAddToCart = (event) => {
    event.preventDefault();
    const product = products.products.find(
      (product) => product._id === event.target.value
    );

    dispatch(addToCart(product));
  };
    
        return (
            <div>
                {/* <Carousel />
                <Phoneitem /> */}
                <div className="container-fluid mb-3">
  <div className="row px-xl-5">
    <div className="col-lg-12">

   
                                  
        <div id="header-carousel" className="carousel slide " data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{height: '410px'}}>
              <img className="img-fluid" src="img/anh-bia1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                {/* <div className="p-3" style={{maxWidth: '700px'}}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                  <a href className="btn btn-light py-2 px-3">Shop Now</a>
                </div> */}
              </div>
            </div>
            <div className="carousel-item" style={{height: '410px'}}>
              <img className="img-fluid" src="img/slide3.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: '700px'}}>
                  {/* <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                  <a href className="btn btn-light py-2 px-3">Shop Now</a> */}
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-dark" style={{width: '45px', height: '45px'}}>
              <span className="carousel-control-prev-icon mb-n2" />
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-dark" style={{width: '45px', height: '45px'}}>
              <span className="carousel-control-next-icon mb-n2" />
            </div>
          </a>
        </div>

        </div>
    
        <div className="col-lg-4">
</div>


    </div>
    </div>







        <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
              <h1 className="fa fa-check text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">Sản phẩm chất lượng</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
              <h5 className="font-weight-semi-bold m-0">Vận chuyển nhanh</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">7 ngày hoàn hàng</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">24/7 hỗ trợ</h5>
            </div>
          </div>
        </div>
         </div>
{/* 
      <div className="container-fluid offer pt-5">
  
<div className="row px-xl-5">
    <div className="col-md-12 pb-4">
      <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
        <img src="img/slide3.jpg" alt="" />
        <div className="position-relative" style={{zIndex: 1}}>
          <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
          <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
          <a href className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
        </div>
      </div>
    </div>
    <div className="col-md-12 pb-4">
      <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
        <img src="img/slide1.jpg" alt="" />
        <div className="position-relative" style={{zIndex: 1}}>
          <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
          <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
          <a href className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
        </div> */}


<div className="container-fluid pt-5 bg-secondary">
  <div className="text-center mb-4">
    {/* <h2 className="section-title px-5"><span className="px-2">Sản phẩm nổi bật</span></h2> */}
    <h2 className=" px-5"><span className="px-2">Sản phẩm nổi bật</span></h2>
  </div>
  <div className="row px-xl-5 pb-3">


  {Object.keys(products.products)
              .slice(0, 8)
              .map((key) => (

             
                <div className="col-lg-3 col-md-6 col-sm-6 pb-1 ">
                <div className="card product-item border-0 mb-4">
                  {/* <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0"> */}
                  <div style={{minHeight: "320px"}} className="card-header product-img position-relative overflow-hidden bg-transparent border ">
                    <img className="img-fluid w-100" src={
                                products.products[key].productPictures
                                  ? generatePublicUrl(
                                      products.products[key].productPictures[0].img
                                    )
                                  : "/images/phone.png"
                              } alt="" />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-2 pb-1" style={{minHeight: "80px"}}>
                  <NavLink
                                  to={`/product-details/${products.products[key]._id}`} className=" h6 text-truncate mb-1">{products.products[key].name}</NavLink>
                    <div className="d-flex justify-content-center">
                      { products.products[key].discount != 0 ?
                      (<> <h6 className="text-danger">{products.products[key].price -
                        (products.products[key].price *
                          products.products[key].discount) /
                          100} VNĐ</h6><h6 className="text-muted ml-2"><del>{products.products[key].price} VNĐ</del></h6></>
        ) :
                       (<h6 className="text-danger ml-2">{products.products[key].price} VNĐ</h6>) }
                     
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                  <Link
                            to={`/product-details/${products.products[key]._id}`} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />Xem chi tiết</Link>
                    <button value={products.products[key]._id}
                                  onClick={(e) => handleAddToCart(e)} href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Thêm vào giỏ</button>
                  </div>
                </div>
              </div>
         ))}


  </div>
</div>


            </div>
        )
    }
export default Home;
