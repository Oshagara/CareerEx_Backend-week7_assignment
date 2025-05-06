import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [trigger, setTrigger] = useState(false);

  const handleAdd = () => setTrigger(!trigger);

  return (
    <div className="App">
      <h2>Lost & Found</h2>
      <ItemForm onAdd={handleAdd} />
      <ItemList key={trigger} />
    </div>
  );
}

export default App;