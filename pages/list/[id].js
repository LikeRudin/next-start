export default function Detail({ results, copyright }) {
  return (
    <>
      <h1> {results["list_name"]}</h1>
      {results?.books.map((info, index) => (
        <div key={info.title}>
          <h4>{info.title}</h4>
          <h4>{info.author}</h4>
        </div>
      ))}
      <h3>{copyright}</h3>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { results, copyright } = await (
    await fetch(` https://books-api.nomadcoders.workers.dev/list/${params.id}`)
  ).json();
  return {
    props: { results, copyright },
  };
}
