import { Card, Grid, Paper } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangePasswordUser } from "../../../actions/userAction";

const ChangePassword = (props) => {
  const auth = useSelector((state) => state.auth);
  const setting = useSelector((state) => state.settings);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!setting.loading) {
      setPassword("");
      setConfirmPassword("");
    }
  }, [setting.loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ChangePass = (e) => {
    e.preventDefault();
    const user = {
      id: auth.user._id,
      password,
    };
    dispatch(ChangePasswordUser(user));

    setMessage("Cập nhật mật khẩu thành công");
  };

  const validate = (e, type = 1) => {
    e.preventDefault();
    let value = password;
    // var reg = new RegExp("(?=.*[a-z])(?=.*[A-Z]}.{6,32}$");
    // var test = reg.test(value);
    // type === 1 ? setPassword(value) : setConfirmPassword(value);
    switch (type) {
      case 1:
        if (value.length < 6) {
          setMessage("Mật khẩu phải có ít nhất 6 kí tự");
          break;
        } 
        if (confirm_password.length > 0 && confirm_password !== value) {
          setMessage("Mật khẩu không khớp");
          break;
        }
        if (confirm_password === value && value.length > 6) {
          setMessage("");
          break;
        }
        break;
      case 2:
        if (password !== value) {
          setMessage("Entered Password is not matching!!");
        } else {
          setMessage("Password matching!!");
        }
        break;
      default:
        break;
    }
  };

  // if (!auth.authenticate) {
  //   return <Redirect to={`/login`} />;
  // }

  return (
    <>
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <div className="col-lg-4">
          <div class="list-group">
            <Link to="/my-account" href="#" class="list-group-item list-group-item-action ">
              Thông tin tài khoản
            </Link>
            <Link to="/history"  href="#" class="list-group-item list-group-item-action">
              Lịch sử mua hàng
            </Link>
            <Link to="/change-password" href="#" class="list-group-item list-group-item-action active">
              Đổi mật khẩu
            </Link>
            
            
          </div>
        </div>
        <div className="col-lg-8">
        <div className="card card-primary">
<div className="card-header">
  <h3 className="card-title">Đổi mật khẩu</h3>
  <h6 className="text-success"> {message}</h6>
</div>
<form method="post"
                enctype="multipart/form-data"
                onSubmit={(e)=>{
                  validate(e);
                  if(message == "") ChangePass(e);
                }}>
  <div className="card-body">
    
  <div className="row">
        <div className="col-md-6 form-group">
          <label>Mật khẩu mới</label>
          <input className="form-control" type="password" placeholder=""  value={password} required onChange={(e)=>setPassword(e.target.value)}
                     />
        </div>
        <div className="col-md-6 form-group">
          <label>Nhập lại mật khẩu mới</label>
          <input className="form-control" type="password" placeholder="" value={confirm_password} required onChange={(e) => setConfirmPassword(e.target.value)}
                     />
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
    <button type="submit" className="btn btn-primary">Gửi</button>
  </div>
</form>
</div>

        </div>
      </div>
    </div>
  </>
  );
};

export default ChangePassword;
