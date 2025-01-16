import { useEffect, useState } from 'react';
import SearchList from './components/SearchList';
import { listTranslation } from './helpers/list';
import TodoList from './components/TodoList';


function App() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState('');
  const change = (e) => setSearch(e.target.value);

  useEffect(() =>{
    fetch('/users.json')
    .then(response => response.json())
    .then(userData => setUsers(userData))
    .catch(() => setUsers([]))
  },[]);

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
