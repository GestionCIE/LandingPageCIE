import "antd/dist/antd.css";
import Head from "next/head";

import Layout from "../components/Layout";
import Content from "../components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gestio CIE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Content></Content>
      </Layout>
    </>
  );
}
