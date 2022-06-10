import React from "react";
import Link from "next/link";
import Head from "next/head";

const User = ({ user }) => {
  return (
    <>
      <Head>
        <title>{user.name} - NextJS with Custom Express Server</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body text-center">
              Name: {user.name}
              <br />
              Email: {user.email}
              <br />
              Phone: {user.phone}
              <br />
              <small>Address: {user.address.city}</small> <br />
              <Link href="/single">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return { props: { user } };
}

export default User;
