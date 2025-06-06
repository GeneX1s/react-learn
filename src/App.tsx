import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Manhattan",
    "Oregon",
    "Los Angeles",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    // <div>
    //   <Message></Message>
    // </div>
    //or <Message />
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
