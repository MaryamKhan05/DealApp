import React, {Component} from 'react';
import MainStackNav from './src/services/navigation/main-stack-nav';
import {configureStore} from '@reduxjs/toolkit';
import {userTokenSlice} from './src/storage/Reducer';
import {Provider} from 'react-redux';
import {SearchProvider} from './src/context/searchContext';
//creating store
const store = configureStore({
  reducer: userTokenSlice,
});
const App = () => {
  return (
    <Provider store={store}>
      <SearchProvider>
        <MainStackNav />
      </SearchProvider>
    </Provider>
  );
};
export default App;
// const MyApp = App;
// export default () => {
//   return (
//     <SearchProvider>
//       <MyApp />
//     </SearchProvider>
//   );
// };
