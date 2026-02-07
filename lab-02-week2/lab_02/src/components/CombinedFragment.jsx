function CombinedFragment() {
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" }
  ];

  return (
    <>
      <h2>Combined Fragment</h2>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <p>Total: {items.length} items</p>
    </>
  );
}

export default CombinedFragment;
