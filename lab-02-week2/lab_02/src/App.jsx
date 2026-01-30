import FragmentLayout from "./components/FragmentLayout";
import ItemList from "./components/ItemList";
import CombinedFragment from "./components/CombinedFragment";
import Section from "./components/Section";
import ProductList from "./components/ProductList";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Lab 02 – Week 2</h1>

      <FragmentLayout />

      <h2>ItemList</h2>
      <ItemList />

      <CombinedFragment />

      <Section title="Products">
        <ProductList />
      </Section>

      <h2>Two Card Instances</h2>
      <Card title="First Card">
        <p>This is the first card.</p>
      </Card>

      <Card title="Second Card" className="highlight">
        <p>This is the second card.</p>
      </Card>
    </>
  );
}

export default App;
