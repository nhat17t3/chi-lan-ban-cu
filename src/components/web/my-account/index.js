import { Card, Grid, Paper } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeInformation } from "../../../actions/userAction";

const MyAccount = (props) => {
  const auth = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      setFirstName(auth.user.firstName);
      setLastName(auth.user.lastName);
      setEmail(auth.user.email);
      setUsername(auth.user.username);
      setPhoneNumber(auth.user.phoneNumber);
      setAddress(auth.user.address);
    }
  }, [auth]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeInfo = (e) => {
    e.preventDefault();
    const infor = {
      id: auth.user._id,
      firstName,
      email,
      lastName,
      address,
      phoneNumber,
    };
    dispatch(ChangeInformation(infor));
    setMessage("Cập nhật thông tin thành công!");
  };

  if (!auth.authenticate) {
    return <Redirect to={`/`} />;
  }
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-4">
            <div class="list-group">
              <Link to="/my-account" href="#" class="list-group-item list-group-item-action active">
                Thông tin tài khoản
              </Link>
              <Link to="/history"  href="#" class="list-group-item list-group-item-action">
                Lịch sử mua hàng
              </Link>
              <Link to="/change-password" href="#" class="list-group-item list-group-item-action">
                Đổi mật khẩu
              </Link>
              
              
            </div>
          </div>
          <div className="col-lg-8">
          <div className="card card-primary">
  <div className="card-header">
    <h3 className="card-title">Thông tin tài khoản</h3>
    <h6 className="text-success"> {message}</h6>
  </div>
  <form method="post"
                  enctype="multipart/form-data"
                  onSubmit={changeInfo}>
    <div className="card-body">
      
    <div className="row">
          <div className="col-md-6 form-group">
            <label>Họ</label>
            <input className="form-control" type="text" placeholder="John"  value={firstName} required onChange={(e)=>setFirstName(e.target.value)}
                       />
          </div>
          <div className="col-md-6 form-group">
            <label>Tên</label>
            <input className="form-control" type="text" placeholder="Doe" value={lastName} required onChange={(e) => setLastName(e.target.value)}
                       />
          </div>
          <div className="col-md-6 form-group">
            <label>E-mail</label>
            <input className="form-control" type="text" placeholder="example@email.com" disabled required value={email}  onChange={(e) => setEmail(e.target.value)}
                       />
          </div>
          <div className="col-md-6 form-group">
            <label>Số điện thoại</label>
            <input className="form-control" type="text" placeholder="+123 456 789" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)}
                      />
          </div>
          <div className="col-md-12 form-group">
            <label>Địa chỉ</label>
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
    <div className="card-footer">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
