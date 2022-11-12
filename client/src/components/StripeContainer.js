import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm.js";

const PUBLIC_KEY =
  "pk_test_51M3LzhF8ul5vSrSUxAAsbJvGrniCUcnk5TPuYg4G5ynnNs4b4ahdhtrm0soIb1p0KSPYV5kUpyO13vIvKmTNcqfd00zbfu09DE";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
