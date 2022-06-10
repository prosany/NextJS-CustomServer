import Head from "next/head";
import Link from "next/link";

export default function Single({ users }) {
  return (
    <>
      <Head>
        <title>NextJS with Custom Express Server</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.phone} <br />
            <small>{user.address.city}</small> <br />
            <Link href={`/single/${user.id}`}>User Details</Link>
          </li>
        ))}
      </ul>
      <br />
      <Link href="/">Home</Link>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
