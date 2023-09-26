import {createStore} from "redux"
import rootred from './redux/reducers/main';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootred)
const store = createStore( persistedReducer)
const persistor = persistStore(store)
export default store
export {persistor}


// const store = createStore(
//     rootred
// );

//  export default store