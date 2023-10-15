export default function Detail({ results, copyright }) {
  return (
    <>
      <h1> {results["list_name"]}</h1>

      {results?.books.map((info, index) => (
        <div className="container" key={index}>
          <div
            className="cover"
            style={{ backgroundImage: `url(${info.book_image})` }}
          />
          <span className="title">{info.title}</span>
          <span className="author">{info.author}</span>
          <a className="buy-link" href={info.amazon_pruduct_url}>
            {" "}
            buy Now &rArr;
          </a>
        </div>
      ))}
      <h3>{copyright}</h3>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .cover {
          width: 100px;
          height: 160px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }

        .title {
          margin-left: 10px;
        }

        .buy-link {
          text-decoration: none;
          display: inline-block;
          padding: 10px 20px;
          background-color: rgba(0, 0, 0, 0.1);
          border: 1px solid #000;
          border-radius: 5px;
          color: #000;
        }

        .buy-link:hover {
          background-color: rgba(0, 0, 0, 0.2);
          cursor: "pointer";
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params.id);
  const { results, copyright } = await (
    await fetch(
      ` https://books-api.nomadcoders.workers.dev/list?name=${params.id}`,
    )
  ).json();
  return {
    props: { results, copyright },
  };
}
