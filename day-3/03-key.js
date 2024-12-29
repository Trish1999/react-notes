//In React, the key prop is a special attribute used to uniquely identify elements in a list. 
//It helps React optimize rendering by determining which items have changed, been added, or been removed

function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li> // Using index as key (not ideal for dynamic lists)
      ))}
    </ul>
  );
}

//when to use index as a key?
//1.the items i your list do ot have a uique id.
//2.the list is static list and will not change.
//3.the list will ever be reordered or filtered.