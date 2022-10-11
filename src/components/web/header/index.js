import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Mobileheader from "../header/mobile-header";
import { useDispatch, useSelector } from "react-redux";
import { getListCategory } from "../../../actions/categoryAction";
import { getListBrand } from "../../../actions/brandAction";

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const cartState = useSelector((state) => state.cartState);
  const brands = useSelector((state) => state.brand);
  const categories = useSelector((state) => state.category);
  const [width, setWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListBrand());
    dispatch(getListCategory());
  }, [dispatch]);

  return (
    <>
      <div className="">
        {/* Topbar Start */}
        <div className="container-fluid bg-dark">
          {/* <div className="row  py-2 px-xl-5 bg-custom"> */}
          <div className="row bg-secondary  py-2 px-xl-5 bg-dark ">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="d-inline-flex align-items-center">
                <a className="text-dark" href>
                  FAQs
                </a>
                <span className="text-muted px-2">|</span>
                <a className="text-dark" href>
                  Help
                </a>
                <span className="text-muted px-2">|</span>
                <a className="text-dark" href>
                  Support
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-dark px-2" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="text-dark px-2" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="text-dark px-2" href>
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="text-dark px-2" href>
                  <i className="fab fa-instagram" />
                </a>
                <a className="text-dark pl-2" href>
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center py-3 px-xl-5 " >
            <div className="col-lg-3 d-none d-lg-block">
              <a href className="text-decoration-none">
                {/* <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    
                  </span>
                  Shopper
                </h1> */}
                <img style={{width: "80px"}} src="img/logo1.jpg" alt="Image" className="ml-5" />
              </a>
            </div>
            <div className="col-lg-6 col-9 text-left">
              <form action={`/product/search?${search}`}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    value={search}
                    placeholder="Tìm kiếm sản phẩm..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="input-group-append ">
                    <button type="submit" className="input-group-text  text-primary ">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-3 text-right">
              {/* <a href className="btn border">
                <i className="fas fa-heart text-primary" />
                <span className="badge">0</span>
              </a> */}
              <Link to="/carts" className="btn border">
                <i className="fas fa-shopping-cart text-warning" />
                <span className="badge text-warning">{cartState.cart}</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <div className="container-fluid border-bottom bg-dark mb-5">
          {/* <div className="row border-top px-xl-5 bg-custom"> */}
          <div className="row  px-xl-5 ">
{/*             
            <div className="col-lg-3 d-none d-lg-block">
              <a
                className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                data-toggle="collapse"
                href="#navbar-vertical"
                style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
              >
                <h6 className="m-0">Danh mục sản phẩm</h6>
                <i className="fa fa-angle-down text-dark" />
              </a>
              <nav
                className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                id="navbar-vertical"
              >
                <div
                  className="navbar-nav w-100 overflow-hidden"
                  style={{ height: "410px" }}
                >

              {categories.listCategory.map((category) => (
                <Link
                to={`/category/${category._id}`}
                 className="nav-item nav-link">
                {category.name}
              </Link>
              ))}
                  
                </div>
              </nav>
            </div> */}
            <div className="col-lg-12 ">
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0 ">
              {/* <nav className="navbar navbar-expand-lg  navbar-light py-3 py-lg-0 px-0 bg-custom"> */}
                <a href className="text-decoration-none d-block d-lg-none">
                  {/* <h1 className="m-0 display-5 font-weight-semi-bold">
                    <span className="text-primary font-weight-bold border px-3 mr-1">
                      E
                    </span>
                    Shopper
                  </h1> */}
                <img style={{width: "80px"}} src="img/logo1.jpg" alt="Image" className="ml-5" />

                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between "
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link ">
                      Trang chủ
                    </Link>
                    
                   
                    <div className="nav-item dropdown">
                    <Link to="/products"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Danh mục sản phẩm
                      </Link>
                      <div className="dropdown-menu rounded-0 m-0">
                      {categories.listCategory.map((category) => (
                <Link
                to={`/category/${category._id}`}
                className="dropdown-item">
                {category.name}
              </Link>
              ))}
                      {/* <Link to="/products" className="dropdown-item">
                          Shopping Cart
                          </Link>
                        <Link to="/products" className="dropdown-item">
                          Checkout
                          </Link> */}
                      </div>
                    </div>
                    <Link to="/products" className="nav-item nav-link">
                      cửa hàng
                    </Link>
                    <Link to="/products" className="nav-item nav-link">
                      Liên hệ
                    </Link>
                  </div>
                  {!auth.authenticate ? (
                  <div className="navbar-nav ml-auto py-0">
                    <Link to="/login" className="nav-item nav-link">
                      Đăng nhập
                    </Link>
                    <Link to="/register" className="nav-item nav-link">
                      Đăng kí
                    </Link>
                  </div>
                  ):(
                    <div className="navbar-nav ml-auto py-0" >
                    <div className="nav-item dropdown">
                    <Link 
                        className="nav-link dropdown-toggle "
                        data-toggle="dropdown"
                      >
                        {/* Tài khoản: {auth.user.firstName} */}
                      </Link>
                      <div className="dropdown-menu rounded-0 m-0">
                      
                      <Link to="/my-account" className="dropdown-item">
                          Thông tin tài khoản
                          </Link>
                        <Link to="/history" className="dropdown-item">
                        Lịch sử mua hàng
                          </Link>
                           <Link to="/change-password" className="dropdown-item">
                        Đổi mật khẩu
                          </Link>
                      </div>
                    </div>
                    <Link to="/logout" className="nav-item nav-link">
                    Đăng xuất
                  </Link>
                        </div>
                    
                  )}
                </div>
              </nav>
{/*                       
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{height: '410px'}}>
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: '700px'}}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                  <a href className="btn btn-light py-2 px-3">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{height: '410px'}}>
              <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: '700px'}}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                  <a href className="btn btn-light py-2 px-3">Shop Now</a>
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
        </div> */}


            </div>
          </div>
        </div>
        {/* Navbar End */}
      </div>
    </>
  );
};

export default Header;
