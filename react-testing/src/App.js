import { useState } from 'react';
import SearchList from './components/searchList';
import { listTranslation } from './helpers/list';


function App() {
  const [search, setSearch] = useState('');
  const change = (e) => setSearch(e.target.value);
  const users = {
    type: 'User',
    items: [
      {name: 'Ana', surname:"Manzana"},
      {name: 'Juana', surname:"Hermana"},
      {name: 'Juana', surname:"Pera"},
    ]
  };

  return (
    <div className="App">
      <input onInput={change}/>
      <SearchList items={listTranslation(users)} search={search}/>
    </div>
  );
}

export default App;
