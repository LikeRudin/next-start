import Link from "next/link";

export default function IndexPage({ results, copyright }) {
  return (
    <>
      <div className="wrapper">
        {results?.map((info, index) => (
          <Link href={`/list/${info["list_name_encoded"]}`} key={index}>
            <div className="link-text">{info["display_name"]} &rArr;</div>
          </Link>
        ))}
        <h3>{copyright}</h3>
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          margin: 20px;
        }

        .link-text {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
          font-size: 18px;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }

        .linkBox:hover {
          background-color: #e0e0e0;
        }
      `}</style>
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
