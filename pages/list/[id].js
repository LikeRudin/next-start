import { useRouter } from "next/router";

export default function Detail({ results, copyright }) {
  return (
    <>
      <h1> {results["list_name"]}</h1>
      {results?.books.map((info) => (
        <div>
          <h4>{info.title}</h4>
          <h4>{info.author}</h4>
        </div>
      ))}
      <h3>{copyright}</h3>
    </>
  );
}

export async function getServerSideProps() {
  const router = useRouter;
  const { results, copyright } = await (
    await fetch(
      ` https://books-api.nomadcoders.workers.dev/list/${router.query.id}`
    )
  ).json();
  return {
    props: { results, copyright },
  };
}
