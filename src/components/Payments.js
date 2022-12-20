import React from "react";
import "./CSS/payments.css";


function Payments() {
  return (
    <div className="payment-container">

        <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/8826/8826099.png" alt="credito" className="pay-img"/>
            <div className="payment-text">
                <p> Tarjeta de credito </p>
                <p className="pay-subtext"> Ver promociones bancarias </p>
            </div>
        </div>

        <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/8685/8685039.png" alt="debito" className="pay-img"/>
            <div className="payment-text">
                <p> Tarjeta de debito </p>
                <p className="pay-subtext"> Ver mas </p>
            </div>
        </div>

        <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/806/806843.png" alt="cuotas" className="pay-img"/>
            <div className="payment-text">
                <p> Cuotas sin tarjeta </p>
                <p className="pay-subtext"> Conocé Mercado Credito </p>
            </div>
        </div>

        <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/4947/4947104.png" alt="efectivo" className="pay-img"/>
            <div className="payment-text">
                <p> Efectivo </p>
                <p className="pay-subtext"> Ver mas </p>
            </div>            
        </div>

        <div className="plus">
            <img src="https://cdn-icons-png.flaticon.com/512/8212/8212684.png" className="pay-plus" alt="mas" />
        </div>

  </div>
  
  );
}

export default Payments;