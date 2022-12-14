import React, { Component, useEffect, useState } from "react";
import { Grid, Modal, Paper } from "@material-ui/core/";
import Summarycart from "./summarycart";
import { connect, useDispatch, useSelector } from "react-redux";
import { productQuantity, clearProduct } from "../../../actions/cartQuantity";
import { Link, Redirect } from "react-router-dom";
import { addOrder } from "../../../actions/orderAction";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Checkout = () => {
  const auth = useSelector((state) => state.auth);
  const cartProps = useSelector((state) => state.cartState);
  const orderProps = useSelector((state) => state.order);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [open, setOpend] = useState(false);
  //0 : chua hoan thanh, 1: thanh toan bang the, 2: thanh toan papal, 3: thanh toan giao hang tai nha
  const [typePayment, setTypePayment] = useState(3);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      setFirstName(auth.user.firstName);
      setLastName(auth.user.lastName);
      setEmail(auth.user.email);
      // setUsername(auth.user.username);
      setPhoneNumber(auth.user.phoneNumber);
      setAddress(auth.user.address);
    }
  }, [auth]);

  let productsInCart = [];
  Object.keys(cartProps.products).forEach(function (item) {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }
  });

  useEffect(() => {
    // window.scrollTo(0, 0);
    setMessage("");
  }, []);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const order = {
      firstName,
      lastName,
       email,
      phoneNumber,
      address,
      typePayment
    }
    dispatch(addOrder(order));
    alert("Ch??c m???ng b???n ???? ?????t h??ng th??nh c??ng")
    setOpend(false);
    return <Redirect to={`/`} />;
  };
  const handleOpen = () => {
    if (phoneNumber === "") {
      setMessage("Phone number cannot be empty");
      window.scrollTo(0, 0);
      setOpend(false);
      return;
    }
    if (address === "") {
      setMessage("Address cannot be empty");
      window.scrollTo(0, 0);
      setOpend(false);
      return;
    }
    setOpend(true);
  };
  const handleClose = () => {
    setOpend(false);
  };

  if (!cartProps) {
    return <Redirect to={`/`} />;
  }
  if (orderProps.addOrder) {
    return <Redirect to={`/history`} />;
  }
  // if (!auth.authenticate) {
  //   return <Redirect to={`/login`} />;
  // }

  return (
    <>
    <div className="container-fluid pt-5">
  <form className="row px-xl-5" onSubmit={handleSubmitOrder}>
    <div className="col-lg-8">
      <div className="mb-4">
        <h4 className="font-weight-semi-bold mb-4">Th??ng tin nh???n h??ng</h4>
        <div className="row">
          <div className="col-md-6 form-group">
            <label>H???</label>
            <input className="form-control" type="text" placeholder="John"  value={firstName} required onChange={(e)=>setFirstName(e.target.value)}
                       />
          </div>
          <div className="col-md-6 form-group">
            <label>T??n</label>
            <input className="form-control" type="text" placeholder="Doe" value={lastName} required onChange={(e) => setLastName(e.target.value)}
                       />
          </div>
          <div className="col-md-6 form-group">
            <label>E-mail</label>
            <input className="form-control" type="text" placeholder="example@email.com"  value={email}  onChange={(e) => setEmail(e.target.value)}
                       />
          </div>
          <div className="col-md-6 form-group">
            <label>S??? ??i???n tho???i</label>
            <input className="form-control" type="text" placeholder="+123 456 789" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)}
                      />
          </div>
          <div className="col-md-12 form-group">
            <label>?????a ch???</label>
            <input className="form-control" type="text" placeholder="123 Street" value={address} required onChange={(e) => setAddress(e.target.value)} />
          </div>
          
          {/* <div className="col-md-6 form-group">
            <label>Country</label>
            <select className="custom-select">
              <option selected>United States</option>
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
            </select>
          </div> */}
          
          {/* <div className="col-md-12 form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="newaccount" />
              <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
            </div>
          </div> */}
         
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Chi ti???t ????n h??ng</h4>
        </div>
        <div className="card-body">
          <h5 className="font-weight-medium mb-3">S???n ph???m</h5>
          {productsInCart.map((product, index) => (

            <div className="d-flex justify-content-between">
            <p style={{maxWidth: "220px"}}>{product.name}</p> 
            <p className="mx-2 text-danger">X{product.quantity_buy}</p>
            <p >{product.price_discount} VN??</p>
          </div>
            ))}
          
          <hr className="mt-0" />
          <div className="d-flex justify-content-between mb-3 pt-1">
            <h6 className="font-weight-medium">Ti???n h??ng</h6>
            <h6 className="font-weight-medium">{Math.round(cartProps.cartPrice)} VN??</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">ph?? v???n chuy???n</h6>
            <h6 className="font-weight-medium">20 000 VN??</h6>
          </div>
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <div className="d-flex justify-content-between mt-2">
            <h5 className="font-weight-bold">T???ng</h5>
            <h5 className="font-weight-bold">{Math.round(cartProps.cartPrice + 20000)} VN??</h5>
          </div>
        </div>
      </div>
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Ph????ng th???c thanh to??n</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <div className="custom-control custom-radio">
              <input type="radio" className="custom-control-input" name="payment" id="paypal" value={3} checked   onChange = {(e)=>setTypePayment(e.target.value)} />
              <label className="custom-control-label" htmlFor="paypal">Thanh to??n khi nh???n h??ng COD</label>
            </div>
          </div>
          {/* <div className="form-group">
            <div className="custom-control custom-radio">
              <input type="radio" className="custom-control-input" name="payment" id="directcheck" value={2}  onChange = {(e)=>setTypePayment(e.target.value)} />
              <label className="custom-control-label" htmlFor="directcheck">Paypal</label>
            </div>
          </div> */}
          {/* <div className>
            <div className="custom-control custom-radio">
              <input type="radio" className="custom-control-input" name="payment" id="banktransfer" value={1}/>
              <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
            </div>
          </div> */}
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <button type="submit"  className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">?????t h??ng</button>
        </div>
        <div>
  {/* <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
  </button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">b???n c?? ch???c ch???n v???i th??ng tin ???? nh???p</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">??</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">quay l???i</button>
          <button type="button" className="btn btn-primary">Oke</button>
        </div>
      </div>
    </div>
  </div> */}

</div>

      </div>
    </div>
  </form>
</div>

    </>
    
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
  auth: state.auth,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Checkout
);
