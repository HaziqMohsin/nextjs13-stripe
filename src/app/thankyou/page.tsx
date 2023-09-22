import { stripe } from "@/lib/stripe";
import Link from "next/link";

const getData = async (id: any) => {
  const customer = await stripe.checkout.sessions.retrieve(id.session_id);
  return customer;
};
export default async function Page({ searchParams }: any) {
  const data = await getData(searchParams);
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4 p-24">
      <div className="text-2xl font-bold">Thank you</div>
      <Link href="/" className="px-4 py-2 bg-red-600 rounded-lg">
        Back to Home
      </Link>
    </main>
  );
}
