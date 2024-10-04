import { View, Text, Alert, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';

export default function Payment() {

    const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`http://192.168.1.46:8080/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("tttt", response);
    const { paymentIntent, ephemeralKey, customer } = await response.json();

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
        const { error } = await presentPaymentSheet();
    
        if (error) {
          Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
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