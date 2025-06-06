import ListGroup from "./components/ListGroup";

function App() {
   let items = [
      "New York",
      "San Francisco",
      "Manhattan",
      "Oregon",
      "Los Angeles",
    ];

  return (
    // <div>
    //   <Message></Message>
    // </div>
    //or <Message />
    <div><ListGroup items={items} heading="Cities"/></div>
  );
}

export default App;
