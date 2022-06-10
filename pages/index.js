import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next.js is Running with Custom Express</h1>
      <Link href="/product/98?type=OK">Product Details</Link>
      <Link href="/single/2">Cached Product Details</Link>
    </>
  );
}
