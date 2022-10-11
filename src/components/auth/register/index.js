import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../../../actions/authAction";

const Register = () => {
  const auth = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if(click === true){
      if (auth.error !== "") {
        setMessage(auth.error);
      }
    }

  }, [auth.error, click]);
  
  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  const handleRegister = (e) => {
    setClick(true);
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      // address,
    };
    dispatch(signup(user));
    // setUsername("");
    setPhoneNumber("");
    // setAddress("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    // setMessage("Register a new customer successfully!");
  };
  return (

    
    <div className="container-fluid pt-5">
  <div className="row px-xl-5">
    <div className="col-lg-2">
    </div>
    <div className="col-lg-8">
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h2 className="font-weight-semi-bold m-0 text-center">ĐĂNG KÍ</h2>
          {message ? (
              <div
                style={{
                
                  textAlign: "center",
                }}
              >
                <div  style={{ color: "red" }}>
                  {message}
                </div>
              </div>
            ) : null}
        </div>
        <div className="card-body">
         
         
        <form className="row" 
              method="post"
              enctype="multipart/form-data"
              onSubmit={handleRegister}>
          <div className="col-md-6 form-group">
            <label>Họ</label>
            <input className="form-control" type="text" placeholder="" name="firstname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required />
          </div>
          <div className="col-md-6 form-group">
            <label>Tên</label>
            <input className="form-control" type="text" placeholder="" name="lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required />
          </div>
          <div className="col-md-6 form-group">
            <label>Email</label>
            <input className="form-control" type="text" placeholder="" name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
          </div>
          <div className="col-md-6 form-group">
            <label>Số điện thoại</label>
            <input className="form-control" type="text" placeholder="" name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required />
          </div>
          
          
          <div className="col-md-6 form-group">
            <label>Mật khẩu</label>
            <input className="form-control"   type="password"
                  name="password"
                  value={password}
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                  required/>
          </div>
          {/* <div className="col-md-6 form-group">
            <label>Nhập lại mật khẩu</label>
            <input className="form-control"   type="password"
                   name="Confirm Password"
                   placeholder=""
                   value={confirm_password}
                   onChange={(e) => setConfirmPassword(e.target.value)}
                   required />
          </div> */}
          <button className="btn btn-lg  btn-block btn-primary font-weight-bold my-3 py-2">Gửi</button>
          <div className="d-flex justify-content-around">
            {/* <div className="mr">
            <Link to="#">
              Quên mật khẩu
            </Link>
            </div> */}
            <div className="float-right ml-1">
            <Link to="/login" className="text-primary" >
              Đăng nhập
            </Link>
            </div>
            {/* <Link to="/register" className=" ml-auto">
              Đăng kí
            </Link> */}
          </div>
        </form>
         
        
        </div>
        {/* <div className="card-footer border-secondary bg-transparent">
          <button className="btn  btn-block btn-primary font-weight-bold my-3 py-3">Gửi</button>
        </div> */}
      </div>
    </div>
  </div>
</div>

  );
};

export default Register;
