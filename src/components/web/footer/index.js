import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <>
      {/* Footer Start */}
<div className="container-fluid bg-dark text-light mt-5 pt-5">
  <div className="row px-xl-5 pt-5">
    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
      {/* <a href className="text-decoration-none">
        <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">E</span>Shopper</h1>
      </a> */}
      <p>Chúng tôi chuyên các sản phẩm từ thiên nhiên, hỗ trợ sức khỏe cho bản thân và gia đình bạn</p>
      <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />Chợ Cạn, Triệu Sơn, Triệu Phong, Quảng trị</p>
      <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />tranlan@gmail.com</p>
      <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3" />0919 410 234</p>
    </div>
    <div className="col-lg-8 col-md-12">
      <div className="row">
        <div className="col-md-4 mb-5">
          <h5 className="font-weight-bold text-light mb-4">Về chúng tôi</h5>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-light mb-2" ><i className="fa fa-angle-right mr-2" />Trang chủ</a>
            <a className="text-light mb-2" ><i className="fa fa-angle-right mr-2" />Sản phẩm</a>
            <a className="text-light mb-2" ><i className="fa fa-angle-right mr-2" />FaceBook</a>
            <a className="text-light mb-2" ><i className="fa fa-angle-right mr-2" />Liên hệ</a>
            {/* <a className="text-light mb-2" href="checkout.html"><i className="fa fa-angle-right mr-2" />Checkout</a>
            <a className="text-light" href="contact.html"><i className="fa fa-angle-right mr-2" />Contact Us</a> */}
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h5 className="font-weight-bold text-light mb-4">Hỗ trợ khách hàng</h5>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-light mb-2" ><i className="fa fa-angle-right mr-2" />Chính sách bảo mật</a>
            <a className="text-light mb-2" ><i className="fa fa-angle-right mr-2" />Chính sách đổi trả</a>
            <a className="text-light mb-2" ><i className="fa fa-angle-right mr-2" />Chính sách giao hàng</a>
            <a className="text-light mb-2" ><i className="fa fa-angle-right mr-2" />Chính sách thanh toán</a>
            <a className="text-light mb-2" ><i className="fa fa-angle-right mr-2" />Hoàn tiền</a>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h5 className="font-weight-bold text-light mb-4">Nhận thông tin mới</h5>
          <form >
            <div className="form-group">
              <input type="text" className="form-control border-0 py-4" placeholder="Tên bạn" required="required" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control border-0 py-4" placeholder="Email" required="required" />
            </div>
            <div>
              <button className="btn btn-primary btn-block border-0 py-3" type="submit">Đăng kí ngay</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="row border-top border-light mx-xl-5 py-4">
    <div className="col-md-6 px-xl-0">
      <p className="mb-md-0 text-center text-md-left text-light">
        {/* © <a className="text-light font-weight-semi-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed
        by */}
        {/* <a className="text-light font-weight-semi-bold" href="https://htmlcodex.com">HTML Codex</a><br /> */}
        {/* Distributed By <a href="https://themewagon.com" target="_blank">ThemeWagon</a> */}

      </p>
    </div>
    <div className="col-md-6 px-xl-0 text-center text-md-right">
      <img className="img-fluid" src="img/payments.png" alt="" />
    </div>
  </div>
</div>
{/* Footer End */}

      </>
    );
  }
}
