const { Fragment, useState } = React;


// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const List = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState({});

  const onItemClick = (item) => {
    setSelectedItems({ ...selectedItems, [item.name]: !selectedItems[item.name] });
  }

  return <Fragment>
    <div>
      <h3>Currently selected:</h3>
      {Object.keys(selectedItems).filter(name => name).map(name => <span>{name}&nbsp</span>)}
    </div>
    <ul className="List">
      {items.map(item => (
        <li key={item.name} className={`List__item List__item--${item.color}${selectedItems[item.name] ? ' List__item--selected' : ''}`}>
          {item.name}
        </li>
      ))}
    </ul>
  </Fragment>
};

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

ReactDOM.render(
  <List items={items} />,
  document.getElementById('root')
);