import { useRouter } from "next/router";

export default function Home({ data }) {
  const router = useRouter();
  const { id, type } = router.query;

  return (
    <>
      <h1>
        Your ID is {id} - and Type is {type}
      </h1>
      {/* <small>{JSON.stringify(router)}</small> */}
      <main>
        {data.map((item) => (
          <div key={item._id}>
            {item.name} - {item.price}
          </div>
        ))}
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://pserver.netlify.app/product")
    .then((res) => res.json())
    .then((data) => data);
  return {
    props: {
      data: response || [],
    },
  };
};
