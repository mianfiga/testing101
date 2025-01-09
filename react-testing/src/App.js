import { useState } from 'react';
import SearchList from './components/SearchList';
import { listTranslation } from './helpers/list';
import TodoList from './components/TodoList';


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
      <h1>Testing 101</h1>
      <h2>Search list</h2>
      <input onInput={change}/>
      <SearchList items={listTranslation(users)} search={search}/>
      <TodoList />
    </div>
  );
}

export default App;
