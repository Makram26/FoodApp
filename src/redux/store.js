// import {legacy_createStore as createStore} from 'redux'

import { configureStore } from '@reduxjs/toolkit';



import reducer from './reducers/index'

const store = configureStore({
    reducer: reducer,
    // You can add middleware, dev tools configuration, etc. here
  });
// export default function Store(initialState){

//     return createStore(reducer,initialState)

// }

// export default function storeConfigure(initialState){
//     const store= configureStore(reducer,initialState)
//     return store
// }



export default store;
