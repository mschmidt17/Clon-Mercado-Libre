import React from "react";
import { useSelector } from "react-redux";
import "./CSS/payments.css";


function Payments() {

    const paymentsItems = useSelector((state) => state.payments)

  return (
    <div className="payment-container">
        {paymentsItems.length > 0 ? 
            paymentsItems.map((item) => {
                return(
                    <div className="card" key={item.id}>
                        <img src={item.image} alt="credito" className="pay-img"/>
                        <div className="payment-text">
                            <p> {item.title} </p>
                            <p className="pay-subtext"> {item.text} </p>
                        </div>
                    </div>
                )
            })
        : null
        }


        <div className="plus">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" className="pay-plus" alt="mas" />
        </div>

  </div>
  
  );
}

export default Payments;