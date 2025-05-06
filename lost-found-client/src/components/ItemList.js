import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/items');
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const markClaimed = async (id) => {
    await axios.put(`http://localhost:5000/api/items/${id}`, { claimed: true });
    fetchItems();
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    fetchItems();
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          <strong>{item.itemName}</strong> - {item.description} at {item.locationFound}
          <button onClick={() => markClaimed(item._id)}>Mark as Claimed</button>
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
