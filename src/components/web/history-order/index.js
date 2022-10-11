import { Card, Grid, Paper } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById, orderCanceled, orderDeliveryed } from "../../../actions/orderAction";

const HistoryOrder = (props) => {
  const auth = useSelector((state) => state.auth);
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.user._id) {
      dispatch(getOrderById(auth.user._id));
    }
  }, [auth.user._id]);

  const handleConfirm = (event) => {
    dispatch(orderDeliveryed(event.target.value, auth.user._id));
  };

  const handleCancled = (event) => {
    dispatch(orderCanceled(event.target.value, auth.user._id));
  };

  let order_list = [];
  console.log(orders);
  orders.map((order, index) => {
    const id = order._id;
    const status = order.orderStatus.find(
      (status) => status.isCompleted === true
    );
    order.productDetail.map((product) => {
      var data = {
        id,
        name: product.productId ? product.productId.name : null,
        price: product.payablePrice,
        quantity: product.purchasedQty,
        paymentStatus: order.paymentStatus,
        orderStatus: status?.type,
      };
      order_list.push(data);
    });
  });
  if (!auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
    <>
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <div className="col-lg-4">
          <div class="list-group">
            <Link to="/my-account" href="#" class="list-group-item list-group-item-action ">
              Thông tin tài khoản
            </Link>
            <Link to="/history"  href="#" class="list-group-item list-group-item-action active">
              Lịch sử mua hàng
            </Link>
            <Link to="/change-password" href="#" class="list-group-item list-group-item-action ">
              Đổi mật khẩu
            </Link>
            
            
          </div>
        </div>
        <div className="col-lg-8">
        <div className="card card-primary">
<div className="card-header">
  <h3 className="card-title">Lịch sử mua hàng</h3>
  
</div>

<div className="card-body">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>#ID</th>
        <th>Sản phẩm</th>
        <th>giá</th>
        <th>số lượng</th>
        <th>Trạng thái đơn</th>
        <th>thanh toán</th>
        <th style={{minWidth: '60px'}}>action</th>
      </tr>
    </thead>
    <tbody>
    {order_list.map((order, index) => (

 <>

      <tr>
        <td>#</td>
        <td>{order.name}</td>
        <td>{order.price}</td>
        <td>{order.quantity}</td>
        <td >{order.orderStatus}</td>
        <td >{order.paymentStatus}</td>
        {order.orderStatus === "ordered" 
                           ? (
                            <td >
                              {/* <button
                                className=" btn-success"
                                type="button"
                                value={order.id}
                                onClick={handleConfirm}
                              >
                                Đã nhận
                              </button> */}
                              <button
                                className="btn-sm btn-danger"
                                type="button"
                                value={order.id}
                                onClick={handleCancled}
                              >
                                Hủy
                              </button>
                            </td>
                          ) : order.orderStatus === "shipped" ?
                          <td >
                              <button
                                className=" btn-success"
                                type="button"
                                value={order.id}
                                onClick={handleConfirm}
                              >
                                Đã nhận
                              </button>
                              
                            </td> :
                           null}
      </tr>
     
      </>
         ))}
     
    </tbody>
  </table>
</div>

  

</div>

        </div>
      </div>
    </div>
  </>
  );
};

export default HistoryOrder;
