import React from "react";
import "./CSS/payments.css";


function Payments() {
  return (
    <div className="payment-container">

        <div className="card">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="credito" className="pay-img"/>
            <div className="payment-text">
                <p> Tarjeta de credito </p>
                <p className="pay-subtext"> Ver promociones bancarias </p>
            </div>
        </div>

        <div className="card">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" alt="debito" className="pay-img"/>
            <div className="payment-text">
                <p> Tarjeta de debito </p>
                <p className="pay-subtext"> Ver más </p>
            </div>
        </div>

        <div className="card">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" alt="cuotas" className="pay-img"/>
            <div className="payment-text">
                <p> Cuotas sin tarjeta </p>
                <p className="pay-subtext"> Conocé Mercado Credito </p>
            </div>
        </div>

        <div className="card">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" alt="efectivo" className="pay-img"/>
            <div className="payment-text">
                <p> Efectivo </p>
                <p className="pay-subtext"> Ver más </p>
            </div>            
        </div>

        <div className="plus">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" className="pay-plus" alt="mas" />
        </div>

  </div>
  
  );
}

export default Payments;