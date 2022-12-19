import React from "react";
import "./CSS/payments.css";


function Payments() {
  return (
    <div className="item">

        <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/8826/8826099.png" width='40' alt="credito"/>
            <p> Tarjeta de credito </p>
            <p> Ver promociones bancarias </p>
        </div>

        <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/8685/8685039.png" width='40' alt="debito"/>
            <p> Tarjeta de debito </p>
            <p> Ver mas </p>
        </div>

        <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/806/806843.png" width='40' alt="cuotas"/>
            <p> Cuotas sin tarjeta </p>
            <p> Conocé Mercado Credito </p>
        </div>

        <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/4947/4947104.png" width='40' alt="efectivo"/>
            <p> Efectivo </p>
            <p> Ver mas </p>
        </div>

        <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/8212/8212684.png" width='40' alt="mas"/>
        </div>

  </div>
  
  );
}

export default Payments;