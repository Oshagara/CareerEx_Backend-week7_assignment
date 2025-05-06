import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    itemName: '',
    description: '',
    locationFound: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/items', form);
    onAdd(res.data);
    setForm({ itemName: '', description: '', locationFound: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="itemName" placeholder="Item Name" value={form.itemName} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="locationFound" placeholder="Location" value={form.locationFound} onChange={handleChange} required />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
