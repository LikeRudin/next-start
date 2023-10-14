import Link from "next/link";
import { useRouter } from "next/router";

export default function IndexPage({ results, copyright }) {
  return (
    <>
      {response?.map((info) => (
        <Link href={`/list/${info["list_name_encoded"]}`}>
          {info["display_name"]} &rArr;
        </Link>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const { results, copyright } = await (
    await fetch("https://books-api.nomadcoders.workers.dev/lists")
  ).json();
  return {
    props: results,
    copyright,
  };
}
