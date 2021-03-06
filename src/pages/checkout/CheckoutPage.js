import React from "react";
import './checkout.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkoutitem/CheckoutItem";
import StripeButton from "../../components/stripebutton/StripeButton";



const CheckoutPage = ({ cartItems,cartTotal}) => {
    return (
        <div className="checkout-page">
          <div className="checkout-header">

              <div  className="header-block">
                  <span>Product</span>
              </div>
              <div className="header-block">
                  <span>Description</span>
              </div>
              <div className="header-block">
                  <span>Quantity</span>
              </div>
              <div className="header-block">
                  <span>Price</span>
              </div>
              <div className="header-block">
                  <span>Remove</span>
              </div>
          </div>
          
          

{
cartItems.map((cartItem)=>(
<CheckoutItem  key={cartItem.id} cartItem={cartItem}/>
))

}

        
      
             <div className="total">
             TOTAL :  &#8377;{cartTotal}
             </div>
              
         <div className="ckbtn">
               <StripeButton price={cartTotal}/>
         </div>
          

        </div>
    );
}

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    cartTotal:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
