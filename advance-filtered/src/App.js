
import { useState } from 'react';
import './App.css';
import Filter from './component/Filter';
import ProductList from './component/ProductList';
import data from './db/data';

function App() {

  const [filters, setFilters] = useState({
    category: "",
   
    color:'',
    // Add searchQuery to the initial state
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  

  return (
    <>

    <Filter
        onFilterChange={handleFilterChange}
        // Pass the search handler
      />
    <ProductList filters={filters}  data={data}/>  
    </>

  );
}

export default App;
