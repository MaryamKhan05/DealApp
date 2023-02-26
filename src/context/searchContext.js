import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Api from '../../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchContext = React.createContext();
export const SearchProvider = ({children}) => {
  const [productsDeals,setProductDeals]=useState([]);
  const [storeDeals,setStoreDeals]=useState([]);
  const [favproduct,setfavproduct]=useState([]);
  const [favloading,setfavloading]=useState(true)
const [favestore,setfavstore]=useState([])
const [favstoreloading,setfavstoreloading]=useState(true)
const [usertoken,setusertoken]=useState(null)
const [userid,setuserid]=useState(null)
  const addfavstore = async (offerId) => {
    const url = `${Api}User/addFavStore`;
    const data = {
      userId: userid,
      dealId: offerId,
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result)
      // getfavProducts()
      getfavstore()
      // console.log("my Store",stores)
    } catch (error) {
      console.log(error.message);
    }
  };



  
  const addfavProducts = async (offerId) => {
    const url = `${Api}User/addFavProduct`;
    const data = {
      userId: userid,
      offerId: offerId,
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result)
      getfavProducts()
      // console.log("my Store",stores)
    } catch (error) {
      console.log(error.message);
    }
  };
  const getfavstore = async () => {
    const url = `${Api}User/getAllFavStore`;
    const data = {
      userId: userid,
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result)
      setfavstore(result.stores);
      setfavloading(false)
      // console.log("my Store",stores)
    } catch (error) {
      console.log(error.message);
    }
  };
  const getfavProducts = async (offerId) => {
    const url = `${Api}User/getAllFavProducts`;
    const data = {
      userId: userid,
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      // console.log(result)
      setfavproduct(result.favProds);
      setfavloading(false)
      // console.log("my Store",stores)
    } catch (error) {
      console.log(error.message);
    }
  };


const savelogindata=async (token,id)=>{
  const value={
    id:id,
    token:token
  }
  console.log(value)
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@User_Key3', jsonValue)
    setuserid(value.id)
    setusertoken(value.token)
  } catch (e) {
    // saving error
    console.log("error here")
  }
}



  const getusertoken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@User_Key3');
      const data= jsonValue != null ? JSON.parse(jsonValue) : null;
      if(data!= null){
        setuserid(data.id)
        setusertoken(data.token)
        alert(data.id)
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(()=>{
getfavProducts();
getfavstore();
getusertoken();
  },[])
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
        setProductDeals,
        productsDeals,
        setStoreDeals,
        storeDeals,
        addfavProducts,
        favproduct,
        setfavproduct,
        favloading,
        savelogindata,
        userid,
        usertoken,
        addfavstore,
        favestore
      }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContext;
