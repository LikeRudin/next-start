export default function Detail({ results, copyright }) {
  return (
    <>
      <div className="wrapper">
        <div className="info-text"> {results["list_name"]}</div>

        {results?.books.map((info, index) => (
          <div className="container" key={index}>
            <div
              className="cover"
              style={{ backgroundImage: `url(${info.book_image})` }}
            />
            <div className="inner-info">
              <span className="title">{info.title}</span>
              <span className="author">{info.author}</span>
              <a className="buy-link" href={info.amazon_pruduct_url}>
                buy Now &rArr;
              </a>
            </div>
          </div>
        ))}
        <div className="info-text">{copyright}</div>
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-gap: 20px;
        }
        .info-text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: xx-large;
          font-weight: bolder;
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          font-size: 16px;
          background-color: azure;
          border: solid 0.5px black;
          border-top: none;
          border-radius: 20px;
        }

        .cover {
          width: 98%;
          height: 320px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          border: solid 5px black;
          z-index: 3;
        }
        .inner-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .title {
          margin-left: 10px;
          font-size: x-large;
          font-weight: bold;
        }
        .author {
          font-size: large;
          color: blue;
          font-weight: bold;
          text-align: center;
        }

        .buy-link {
          text-decoration: none;
          display: inline-block;
          padding: 10px 20px;
          background-color: rgba(0, 0, 0, 0.1);
          border: 1px solid #000;
          border-radius: 5px;
          color: #000;
          cursor: pointer;
        }

        .buy-link:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params.id);
  const { results, copyright } = await (
    await fetch(
      ` https://books-api.nomadcoders.workers.dev/list?name=${params.id}`
    )
  ).json();
  return {
    props: { results, copyright },
  };
}
