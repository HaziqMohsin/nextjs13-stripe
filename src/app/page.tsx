import Product from "./product";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4 p-24">
      <Product />
    </main>
  );
}
