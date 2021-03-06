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
  "pk_live_51HZxQPCmstuPJabcFIdrytuXebp5t6hSVH4R1uzcgZ8lt15fLCRo3eTKeCWKTvEjTEbQKgkrqMjU9m41QY0St5Vk00ByzNGt1d"
);

const handleClick = async (amount) => {
  // Get Stripe.js instance
  const stripe = await stripePromise;

  // Call your backend to create the Checkout Session
  const response = await fetch("https://couch.camp/api/pay/" + amount, {
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

const getValue = (value) => () => {
  handleClick(value);
};

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "80px",
      }}
    >
      <Meta />
      <h1>Pay for Couch Camp</h1>
      <p>
        Many countries don't have access to GoFundMe, you can use this form as a
        proxy. All donations made here will go to the WSC GoFundMe. This was
        created for Couch Camp. You will receive an email with a receipt, this
        can be used as your payment proof.
      </p>
      <Button
        type="secondary"
        style={{ margin: "10px" }}
        onClick={getValue(15)}
      >
        Donate the minimum $15
      </Button>
      <Button
        type="secondary"
        style={{ margin: "10px" }}
        onClick={getValue(10)}
      >
        Donate the minimum $10 (for 2 person teams only.)
      </Button>
      <p>
        The minimum amount is $15, however the WSC needs as much support as
        possible. If you can please consider donating more.
      </p>
      <Button
        type="secondary"
        style={{ margin: "10px" }}
        onClick={getValue(30)}
      >
        Donate $30
      </Button>
      <Button
        type="secondary"
        style={{ margin: "10px" }}
        onClick={getValue(40)}
      >
        Donate $40
      </Button>
      <Button
        type="secondary"
        style={{ margin: "10px" }}
        onClick={getValue(50)}
      >
        Donate $50
      </Button>
      <Button
        type="secondary"
        style={{ margin: "10px" }}
        onClick={getValue(70)}
      >
        Donate $70
      </Button>
      <Button
        type="secondary"
        style={{ margin: "10px" }}
        onClick={getValue(100)}
      >
        Donate $100
      </Button>
      <p>
        Thank you for your kind support keeping the program we all love alive.
      </p>
    </div>
  );
}
