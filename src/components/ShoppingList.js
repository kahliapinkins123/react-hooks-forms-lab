import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearchText(event.target.value)
  }

  function onItemFormSubmit(newItem){
    console.log(newItem)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    }else{
      return (item.category === selectedCategory && item.name.toLowerCase().includes(searchText.toLowerCase()));
    }
  });


  return (
    <div className="ShoppingList">
      <ItemForm addNewItem={addNewItem} items={items} onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={searchText} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
