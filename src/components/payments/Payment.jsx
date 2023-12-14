import React from 'react'
import './payment.css'

const Payment = () => {
  return (
    <div className='container'>
        <div className="options">
            <div className="option">
                <img src="/assets/visa.png" alt="visa" className='option-img'/>
            </div>
            <div className="option">
                <img src="/assets/shop-pay.png" alt="shop-pay" className='option-img'/>
            </div>
            <div className="option">
                <img src="/assets/mastercard.png" alt="mastercard" className='option-img'/>
            </div>
            <div className="option">
                <img src="/assets/gpay.png" alt="gpay" className='option-img'/>
            </div>
            <div className="option">
                <img src="/assets/mastercard.png" alt="shop-pay" className='option-img'/>
            </div>
            <div className="option">
                <img src="/assets/apple-pay.png" alt="apple-pay" className='option-img'/>
            </div>
            <div className="option">
                <img src="/assets/amex.png" alt="amex" className='option-img'/>
            </div>
        </div>
    </div>
  )
}

export default Payment