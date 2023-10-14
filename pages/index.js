import Link from "next/link";
import { useRouter } from "next/router";

export default function IndexPage({ results, copyright }) {
  return (
    <>
      {results?.map((info, index) => (
        <Link href={`/list/${info["list_name_encoded"]}`} key={index}>
          <span> {info["display_name"]} &rArr;</span>
        </Link>
      ))}
      <h3>{copyright}</h3>
    </>
  );
}

export async function getServerSideProps() {
  const { results, copyright } = await (
    await fetch("https://books-api.nomadcoders.workers.dev/lists")
  ).json();
  return {
    props: { results, copyright },
  };
}
