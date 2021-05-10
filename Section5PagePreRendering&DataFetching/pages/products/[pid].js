import fs from "fs/promises";
import _ from "lodash";
import path from "path";

import { Fragment } from "react";

export default function productDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  //   console.log(data);
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = await JSON.parse(jsonData);
  console.log(data.products[0]);
  const ids = data.products.map((product) => product.id);
  //   console.log(ids);
  const pathWithParams = ids.map((id) => ({ params: { pid: id } }));

  //   if (!product) {
  //     return { notFound: true };
  //   }

  return {
    paths: pathWithParams,
    fallback: true,
  };
}
