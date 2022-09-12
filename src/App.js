import { useState, useEffect } from 'react'
import List from './List';
import Form from './Form';

function App() {

  const API_URL ='http://jsonplaceholder.typicode.com/';

  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    const fetchItems = async () => {
      try { 
      const response = await fetch(`${API_URL}${reqType}`);
      const data = await response.json();
      setItems(data);
      } catch(err) {
        console.log(err);
      }
  }
    fetchItems();
  },[reqType])
  return (
   <div>
    <Form
    reqType={reqType}
    setReqType={setReqType}
    />
    <List
    items={items}
    />
   </div>
  );
}

export default App;
