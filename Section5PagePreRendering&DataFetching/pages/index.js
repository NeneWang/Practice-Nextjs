import fs from 'fs/promises';
import _ from 'lodash';
import path from 'path';


function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd());
  fs.readFileSync()
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}

export default HomePage;
