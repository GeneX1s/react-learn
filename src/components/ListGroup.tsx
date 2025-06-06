import { Fragment, useState } from "react";
import { MouseEvent } from "react";

//Props are reusable components
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //optional function prop
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = [
  //   "New York",
  //   "San Francisco",
  //   "Manhattan",
  //   "Oregon",
  //   "Los Angeles",
  // ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // contoh list kosong, comment items = [] untuk kembalikan ke semula
  // items = [];

  const message = items.length === 0 ? <p>No item found?</p> : null;

  const handleClick = (event: MouseEvent<HTMLLIElement>) => console.log(event);

  const getMessage = () => {
    return items.length === 0 ? "No items found!" : null;
  };

  return (
    /* bisa juga pake <Fragment> */
    <>
      <h1>{heading}</h1>

      {/* {items.length === 0 ? <p>No items found</p> : null} */}

      {/* if items length = 0 adalah true maka return paragraph "No item found", bila false tidak ada yang ditampilkan */}
      {items.length === 0 && <p>No item found</p>}
      {/* dibawah ini contoh conditional rendering dengan constant dan ternary operator */}
      {/* {message} */}

      {/* dibawah ini contoh function yang serupa*/}
      {/* {getMessage()} */}
      {/* test */}
      <ul className="list-group">
        {/* Contoh dinamis list group */}
        {items.map((item, index) => (
          <li
            // className="list-group-item"
            //otomatis highlight item yang dipilih
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            // onClick={handleClick}
            // onClick={(event) => console.log(item, index)}
          >
            {item}
          </li>
        ))}

        {/* Contoh static list group */}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
