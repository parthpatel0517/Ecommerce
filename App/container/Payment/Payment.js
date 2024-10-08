import { View, Text, Alert, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { orderdata } from '../../redux/Slice/order.slice';
import { useDispatch } from 'react-redux';

export default function Payment(props) {
  console.log("kjjkjjjjkjjjkjkjkjkjkjjjjkkj",JSON.stringify(props.data));
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const [customerId , setCustomerId] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`http://192.168.1.6:8080/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount:props.data.amt,
        }),
        
    });
    
  

    console.log("tttt", response);
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    console.log("paymentIntentpaymentIntentpaymentIntentpaymentIntent",paymentIntent);

    setCustomerId(customer)
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
      setLoading(true);
    }
  };

  
    const openPaymentSheet = async () => {
        const {data}  = await presentPaymentSheet();
        console.log("data",data);
    
        if (data) {
          Alert.alert(`Error code: ${error.code}`, error.message);
        } else {

          dispatch(orderdata({customerId, data:props.data})) 
          console.log("adsjjdsjjdsjsajksajkadsjsajs",{customerId, data:props.data});
          Alert.alert('Success', 'Your order is confirmed!');
        }
      };

  


  return (
    <StripeProvider
    publishableKey={	
       "pk_test_51Q5pVECkj3GZDcAcGvZu15Rmv2DyUpOckKLAjrs29zOWNbjkkwalVPR7X7M2VSh5DdV5JEM5ucHvxO4s3BfG9gs900WEYsqFFE"}
    merchantIdentifier="merchant.identifier" // required for Apple Pay
    urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
  >
    <Button
        variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
  </StripeProvider>
  )
}