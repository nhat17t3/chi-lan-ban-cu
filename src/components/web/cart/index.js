import React, { useState } from "react";
import { Grid, Card } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../../../actions/cartQuantity";
import "./cart.css";
import { generatePublicUrl } from "../../../urlConfig";

function Cart({ cartProps, productQuantity, clearProduct }) {
  let productsInCart = [];
  // window.scrollTo(0, 0);
  let value = 0;
  Object.keys(cartProps.products).forEach(function (item) {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
      value +=
        cartProps.products[item].price * cartProps.products[item].quantity_buy;
    }
  });

  productsInCart.map((product, index) => {});

  // console.log("cart number", cartProps)
  return (

    <>
    <div className="container-fluid bg-secondary mb-5">
  <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '150px'}}>
    <h1 className="font-weight-semi-bold text-uppercase mb-3">Giỏ hàng</h1>
   
  </div>
</div>

<div className="container-fluid pt-5">
  <div className="row px-xl-5">
    <div className="col-lg-8 table-responsive mb-5">
      <table className="table table-bordered text-center mb-0">
        <thead className="bg-secondary text-dark">
          <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody className="align-middle">
        {productsInCart.map((product, index) => (
          <tr>
            <td className="align-middle"><img src={
                                product.productPictures
                                  ? generatePublicUrl(
                                      product.productPictures[0].img
                                    )
                                  : "/images/phone.png"
                              } alt="" style={{width: '50px'}} /> {product.name}</td>
            <td className="align-middle">{product.price - product.price*product.discount/100} VNĐ</td>
            <td className="align-middle">
              <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-minus" onClick={() =>
                                  productQuantity("decrease", product._id)
                                }>
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input type="text" className="form-control form-control-sm bg-secondary text-center" defaultValue={1} min={1} value = {product.quantity_buy}/>
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-plus" onClick={() =>
                                  productQuantity("increase", product._id)
                                }>
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </td>
            <td className="align-middle">{Math.round(
                            product.price_discount * product.quantity_buy
                          )} VNĐ</td>
            <td className="align-middle"><button className="btn btn-sm btn-primary" onClick={() => clearProduct(product._id)}><i className="fa fa-times" /></button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    <div className="col-lg-4">
      <form className="mb-5" action>
        <div className="input-group">
          <input type="text" className="form-control p-4" placeholder="Mã giảm giá" />
          <div className="input-group-append">
            <button className="btn btn-primary">Áp mã</button>
          </div>
        </div>
      </form>
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Tổng giỏ hàng</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3 pt-1">
            <h6 className="font-weight-medium">Tiền hàng</h6>
            <h6 className="font-weight-medium">{Math.round(cartProps.cartPrice)} VNĐ</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">Phí vận chuyển</h6>
            <h6 className="font-weight-medium">20 000 VNĐ</h6>
          </div>
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <div className="d-flex justify-content-between mt-2">
            <h5 className="font-weight-bold">Total</h5>
            <h5 className="font-weight-bold">{Math.round(cartProps.cartPrice + 20000)} VNĐ</h5>
          </div>
          <Link to={cartProps.cart>0?("/checkout"):"/carts"} className="btn btn-block btn-primary my-3 py-3">Tiến hành đặt hàng</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
 
 );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
