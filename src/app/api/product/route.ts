import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET() {
  const price = await stripe.prices.list({});

  //   console.log(price);
  //   const data = await res.json();

  return NextResponse.json({ price });
}

export async function POST(request: Request) {
  //   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { price } = await request.json();
  //   console.log(data);
  //   const priceId = prideId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price,
        quantity: 1,
      },
    ],
    // customer: "cus_Of29Hgrkif91zG",
    customer_email: "priyank@gmail.com",
    mode: "subscription",
    success_url: `http://localhost:3001/thankyou/?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: "http://localhost:3001?canceled=true",
  });

  return NextResponse.json(session.url);
  //   return NextResponse.json({ text: "asdasd" });
}
