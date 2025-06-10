import Alert from "./Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

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

    // ***ListGroup***
    <>
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
     <div>
       <Alert>
         Hello <span>World</span>
       </Alert>
     </div>

    <div>
      <Button
       text = "Click me"
      />
    </div>
    
    </>
  );
}

export default App;
