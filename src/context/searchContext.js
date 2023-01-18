import React, {useState, useEffect} from 'react';

const SearchContext = React.createContext();
export const SearchProvider = ({children}) => {
  const [deals, setDeals] = useState([]);
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5M2ZmOWJmYTBmNTlkZGM0ZTBjNjgiLCJpYXQiOjE2NzM1MDExMzd9.RShrwmDdUOqQA4nans4-3gWGZMvD0kRrXlf8IGVil_0',
  );
  const [search, setSearch] = useState('');
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  {
    /* api call for store detail screen  */
  }

  useEffect(() => {
    fetch('https://project-production-7b65.up.railway.app/Admin/getAllStores', {
      method: 'GET',
      headers,
    })
      .then(response => response.json())
      .then(json => setDeals(json))
      .catch(errr => alert(errr.message));
  }, []);

  {
    /* api call for items near you */
  }

  useEffect(() => {
    fetch(
      'https://project-production-7b65.up.railway.app/Admin/getNearbyProducts',
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          lattitude: 90.0715,
          longnitude: 29.951,
        }),
      },
    )
      .then(response => response.json())
      .then(json => setItems(json))
      .then(console.log(setItems))
      .catch(errr => alert(errr.message));
  }, []);
  {
    /* code for search bar */
  }
  const handleSearch = searchText => {
    setSearch(searchText);
  };
  useEffect(() => {
    let filteredDeals = [];
    let filteredItems = [];
    if (Array.isArray(deals)) {
      filteredDeals = deals.filter(deal =>
        deal.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    setFilteredDeals(filteredDeals);
    if (Array.isArray(items)) {
      filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    setFilteredItems(filteredItems);
  }, [search, deals, items]);

  return (
    <SearchContext.Provider
      value={Object.assign(
        {},
        handleSearch,
        deals,
        items,
        filteredItems,
        filteredDeals,
        search,
      )}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContext;
