import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Api from '../../Api';

const SearchContext = React.createContext();
export const SearchProvider = ({children}) => {
  // const [deals, setDeals] = useState();
  // const [items, setItems] = useState([]);
  // const [token, setToken] = useState(
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5M2ZmOWJmYTBmNTlkZGM0ZTBjNjgiLCJpYXQiOjE2NzM1MDExMzd9.RShrwmDdUOqQA4nans4-3gWGZMvD0kRrXlf8IGVil_0',
  // );
  // const [results, setResults] = useState([]);
  // const [search, setSearch] = useState('');
  // const [filteredDeals, setFilteredDeals] = useState();
  // const [filteredItems, setFilteredItems] = useState();
  // const [isLoading, setLoading] = useState(false);
  // const userToken = useSelector(state => state.reducer.userToken);
  // const [filterproducts, setFilterProducts] = useState([]);
  // const headers = {
  //   'Content-Type': 'application/json',
  // };

  // {
  //   /* api call for store detail screen  */
  // }

  // // useEffect(() => {
  // //   setLoading(true);
  // //   fetch(`${Api}/User/getNearbyDealsProducts`, {
  // //     method: 'PUT',
  // //     headers,
  // //     body: JSON.stringify({
  // //       lat: '33.5700346784227',
  // //       lng: '73.0165566772461',
  // //     }),
  // //   })
  // //     .then(response => response.json())
  // //     .then(json => {
  // //       setDeals(json.products);
  // //       // setFilteredDeals(json.products);
  // //       setFilterProducts(json.products);
  // //       console.log("my jason data=",json);
  // //     })

  // //     .catch(errr => alert(errr.message))
  // //     .finally(() => setLoading(false));
  // // }, []);

  // useEffect(() => {
  //   fetch(`${Api}/User/getNearbyDealsProducts`, {
  //     method: 'PUT',
  //     headers,
  //     body: JSON.stringify({
  //       lat: '33.5700346784227',
  //       lng: '73.0165566772461',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       setItems(json);
  //       setFilterProducts(json.deals);
  //       console.log("my products are=",filterproducts)
  //     })
  //     .catch(errr => alert(errr.message));
  // }, []);
  // {
  //   /* code for search bar */
  // }
  // const handleSearch = searchText => {
  //   setSearch(searchText);
  //   console.log(searchText);
  //   // useEffect(() => {
  //   let fDeals = [];
  //   let filteredItems = [];
  //   if (searchText || searchText != '') {
  //     console.log('deals here=', JSON.stringify(filteredDeals));
  //     fDeals = deals.filter(item =>
  //       item.name
  //         .trim()
  //         .toLowerCase()
  //         .includes(searchText.trim().toLowerCase()),
  //     );
  //     console.log('my f deals =', JSON.stringify(fDeals));
  //     setFilterProducts(fDeals);
  //   } else {
  //     setFilterProducts(deals);
  //   }
  //   // }, [search, deals, items]);
  // };

  // useEffect(() => {
  //   let filteredDeals = [];
  //   let filteredItems = [];
  //   if (search.trim() === '') {
  //     setFilteredDeals(deals);
  //     setFilteredItems(items);
  //   } else if (Array.isArray(deals)) {
  //     filteredDeals = deals.filter(deal =>
  //       deal.name.toLowerCase().includes(search.toLowerCase()),
  //     );
  //     setFilteredDeals(filteredDeals);
  //   }
  //   if (Array.isArray(items)) {
  //     filteredItems = items.filter(item =>
  //       item.name.toLowerCase().includes(search.toLowerCase()),
  //     );
  //     setFilteredItems(filteredItems);
  //     if (filteredDeals.length === 0 && filteredItems.length === 0) {
  //       alert('No results found for your search!');
  //     }
  //   }
  // }, [search, deals, items]);

  return (
    <SearchContext.Provider
      value={{
        // deals,
        // items,
        // filteredDeals,
        // filteredItems,
        // search,
        // setSearch,
        // handleSearch,
        // filterproducts,
      }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContext;
