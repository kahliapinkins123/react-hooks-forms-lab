import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ items, addNewItem, onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  function handleFormSubmit(event){
    
    event.preventDefault();

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    const dataArray = [...items, newItem]
    addNewItem(dataArray);
    setItemName('');
    setItemCategory('Produce');
}

onItemFormSubmit(itemName)


  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
