import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signin } from "../../../actions/authAction";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    if ((auth.error !== "" ) ) {
      setMessage(auth.error);
    }
    if (auth.block === true && (click === true)) {
      setMessage("Tài khoản của bạn đã bị khóa");
    }
  }, [auth.block, click]);

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  const handleLogin = (e) => {
    setClick(true);
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(signin(user));
    setEmail("");
    setPassword("");
    // setMessage("Register a new customer successfully!");
  };
  return (

    <div className="container-fluid pt-5">
  <div className="row px-xl-5">
    <div className="col-lg-4">
    </div>
    <div className="col-lg-4">
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h2 className="font-weight-semi-bold m-0 text-center">ĐĂNG NHẬP</h2>
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
              onSubmit={handleLogin}>
          <div className="col-md-12 form-group">
            <label>Email</label>
            <input className="form-control" type="email" placeholder="" name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
          </div>
          <div className="col-md-12 form-group">
            <label>Mật khẩu</label>
            <input className="form-control"   type="password"
                  name="password"
                  value={password}
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                  required/>
          </div>
          <button className="btn btn-lg  btn-block btn-primary font-weight-bold my-3 py-2">Gửi</button>
          <div className="d-flex justify-content-around">
            {/* <div className="mr">
            <Link to="#">
              Quên mật khẩu
            </Link>
            </div> */}
            <div className="float-right ml-1">
            <Link to="/register" className="text-primary" >
              Đăng kí
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

export default Login;
