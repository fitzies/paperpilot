"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const storeItems = new Map([
  [1, { priceInCents: 99, name: "1000 credits" }],
  [2, { priceInCents: 399, name: "5000 credits" }],
  [3, { priceInCents: 499, name: "Monthly" }],
]);

const checkout = async (data: FormData) => {
  let item = [...storeItems].find(
    ([id, item]) => item.name === data.get("item")
  )![1];
  console.log(item);

  if (!item) {
    console.log("No item");
    return;
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment", //subscription
    success_url: `${process.env.SERVER_URL}/pricing/?success=true+${item.name}`,
    cancel_url: `${process.env.SERVER_URL}/pricing/?canceled=true`,
  });
  console.log(session);

  if (session.url) {
    redirect(session.url);
  }
  if (session.payment_status === "paid") {
    console.log("paid");
  }
};

export { checkout };
