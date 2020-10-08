
import Head from "next/head";
import {
  Button,
  Image,
  Card,
  Link,
  Badge,
  Divider,
  Collapse,
  Text,
  Grid,
  useMediaQuery,
  Row as GeistRow,
} from "@geist-ui/react";
import Meta from "../components/meta";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51HZxQPCmstuPJabcFQ2tqk8dHSfBp6FI3MhLKyN5URSZltTAEPNaIYRYXW7oFJR730g3WxTx0w45TIlOrl1eK07m00Ydqz5vlf"
);

const handleClick = async (event) => {
  // Get Stripe.js instance
  const stripe = await stripePromise;

  // Call your backend to create the Checkout Session
  const response = await fetch("/api/pay/5", {
    method: "POST",
  });

  const session = await response.json();

  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });
  if (result.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  }
};

export default function Home() {

  return (
  
  <Button
                      type="secondary"
                      style={{ marginTop: "-1px" }}
                      onClick={handleClick}
                    >
                      Register
                    </Button>
   );
}
