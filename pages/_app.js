import Layout from "../components/layout";

export default function BookLibrary({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
