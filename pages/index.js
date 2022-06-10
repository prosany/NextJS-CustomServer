import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS with Custom Express Server</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Next.js is Running with Custom Express</h1>
      <Link href="/product/98?type=OK">Product Details</Link>
      <Link href="/single">Cached Product Details</Link>
    </>
  );
}
