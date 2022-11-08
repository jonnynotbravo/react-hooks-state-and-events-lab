import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterBy, setFilterBy] = useState('All');

  const handleClick = (e) => {

    setFilterBy(e.target.value)

  }

  const filteredItems = items.filter(elem => {

    if(filterBy === 'All'){
      
      return true;
    }
    return (
      
      elem.category === filterBy
    )
    
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleClick} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
