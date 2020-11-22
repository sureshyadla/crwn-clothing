import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe=price * 100;
    const publishableKey = 'pk_test_51HqNO2JEzWW3Dym5AyuXpSc1i10WTQaldyeOsWds4iedyTh0mZD36cThEJT4dP77XvZaQdGN9Eqy6Xe7xTVobSo300PspjWu0R';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;