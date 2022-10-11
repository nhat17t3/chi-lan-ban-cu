import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getListProduct,
  getProductById,
} from "../../../actions/productActions";
import { generatePublicUrl } from "../../../urlConfig";
import { addToCart } from "../../../actions/cartAction";

const Singleproduct = (props) => {
  const products = useSelector((state) => state.product);
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getListProduct());
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  useEffect(() => {
    setProduct(products.product_detail);
  }, [products.product_detail]);

  const handleAddToCart = (event) => {
    event.preventDefault();
    const product = products.products.find(
      (product) => product._id === event.target.value
    );

    dispatch(addToCart(product));
  };
  return (
    <>
      {/* <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Chi tiết sản phẩm
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href>Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop</p>
          </div>
        </div>
      </div> */}

      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <div
              id="product-carousel"
              className="carousel slide pointer-event"
              data-ride="carousel"
            >
              <div className="carousel-inner border">
              <div className="carousel-item active">
                    <img
                      className="w-100 h-100"
                      src={
                        product.productPictures
                          ? generatePublicUrl(
                              product.productPictures[0].img
                            )
                          : "/images/phone.png"
                      } alt="sssss"
                    />
                  </div>
                {product?.productPictures?.slice(1).map((item) => (
                  <div className="carousel-item ">
                    <img
                      className="w-100 h-100"
                      src={generatePublicUrl(item.img)}
                      alt="Image"
                    />
                  </div>
                ))}
                
              </div>
              <a
                className="carousel-control-prev"
                href="#product-carousel"
                data-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark" />
              </a>
              <a
                className="carousel-control-next"
                href="#product-carousel"
                data-slide="next"
              >
                <i className="fa fa-2x fa-angle-right text-dark" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{product.name}</h3>
            {/* <div className="d-flex mb-3">
        <div className="text-primary mr-2">
          <small className="fas fa-star" />
          <small className="fas fa-star" />
          <small className="fas fa-star" />
          <small className="fas fa-star-half-alt" />
          <small className="far fa-star" />
        </div>
        <small className="pt-1">(50 Reviews)</small>
      </div> */}
            {/* <a className=" h6 font-weight-semi-bold mb-4 mr-5">{product.price} VNĐ</a>
            <del>{product.price}</del>VNĐ */}
            { product.discount != 0 ?
                      (<> <a className="h6 text-danger">{product.price -
                        (product.price *
                          product.discount) /
                          100} VNĐ</a><a className="text-muted ml-3"><del>{product.price} VNĐ</del></a></>
        ) :
                       (<h6 className="text-danger ml-2">{product.price} VNĐ</h6>) }
            <p className="mb-4">{product.description}</p>
            {/*       
      <div className="d-flex mb-3">
        <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
        <form>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="size-1" name="size" />
            <label className="custom-control-label" htmlFor="size-1">XS</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="size-2" name="size" />
            <label className="custom-control-label" htmlFor="size-2">S</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="size-3" name="size" />
            <label className="custom-control-label" htmlFor="size-3">M</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="size-4" name="size" />
            <label className="custom-control-label" htmlFor="size-4">L</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="size-5" name="size" />
            <label className="custom-control-label" htmlFor="size-5">XL</label>
          </div>
        </form>
      </div>
      <div className="d-flex mb-4">
        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
        <form>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="color-1" name="color" />
            <label className="custom-control-label" htmlFor="color-1">Black</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="color-2" name="color" />
            <label className="custom-control-label" htmlFor="color-2">White</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="color-3" name="color" />
            <label className="custom-control-label" htmlFor="color-3">Red</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="color-4" name="color" />
            <label className="custom-control-label" htmlFor="color-4">Blue</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="color-5" name="color" />
            <label className="custom-control-label" htmlFor="color-5">Green</label>
          </div>
        </form>
      </div> */}
            <div className="d-flex align-items-center mb-4 pt-2">
              {/* <div
                className="input-group quantity mr-3"
                style={{ width: "130px" }}
              >
                <div className="input-group-btn">
                  <button className="btn btn-primary btn-minus">
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-secondary text-center"
                  defaultValue={1}
                />
                <div className="input-group-btn">
                  <button className="btn btn-primary btn-plus">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div> */}
              <button  value={product._id}
                      onClick={(e) => handleAddToCart(e)} className="btn btn-primary px-3">
                <i className="fa fa-shopping-cart mr-1" /> Thêm vào giỏ hàng
              </button>
            </div>
            <div className="d-flex pt-2">
              <p className="text-dark font-weight-medium mb-0 mr-2">
                Share on:
              </p>
              <div className="d-inline-flex">
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
                  <i className="fab fa-pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col">
           
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <h4 className="mb-3">Mô tả sản phẩm</h4>
                <div
                      dangerouslySetInnerHTML={{
                        __html: product.description_detail,
                      }}
                    />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-5 bg-secondary">
  <div className="text-center mb-4">
    {/* <h2 className="section-title px-5"><span className="px-2">Sản phẩm nổi bật</span></h2> */}
    <h2 className=" px-5"><span className="px-2">Có thể bạn cũng thích</span></h2>
  </div>
  <div className="row px-xl-5 pb-3">


  {Object.keys(products.products)
              .slice(0, 4)
              .map((key) => (

             
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
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
    </>
  );
};

export default Singleproduct;
