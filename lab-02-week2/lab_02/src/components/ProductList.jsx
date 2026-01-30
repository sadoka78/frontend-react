import Card from "./Card";

function ProductList() {
  const products = [
    { id: 1, name: "Widget", price: 9.99 },
    { id: 2, name: "Gadget", price: 14.99 },
    { id: 3, name: "Tool", price: 5.5 }
  ];

  return (
    <>
      {products.map(product => (
        <Card key={product.id} title={product.name}>
          <p>Price: ${product.price}</p>
        </Card>
      ))}
    </>
  );
}

export default ProductList;
