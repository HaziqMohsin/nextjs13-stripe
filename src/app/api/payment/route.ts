import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET() {
  const price = await stripe.prices.list({
    limit: 3,
  });

  //   console.log(price);
  //   const data = await res.json();

  return NextResponse.json({ price });
}

export async function POST(request: Request) {
  //   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { data } = await request.json();

  const priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  return NextResponse.json(session.url);
}
