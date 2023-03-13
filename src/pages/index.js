import * as React from "react";
import Layout from "../components/layout";
import Nav from "../components/nav";

function IndexPage() {
  return (
    <>
      <Layout>
        <Nav />
      </Layout>
    </>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;
