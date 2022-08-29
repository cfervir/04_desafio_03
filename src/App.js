import './App.css';
import { useState } from "react";
import Search from './components/Search';
import List from './components/List'

function App() {

  const [filteredData, setFilteredData] = useState('');

  return (
    <>
      <Search searchInput={ setFilteredData } />
      <List searchResult={ filteredData } />
    </>
  )
}

export default App;
