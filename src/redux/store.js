import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactsReducer';
import authReducer from './auth/authReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
});

const middleWares = [ReduxThunk];
const enhancer = applyMiddleware(...middleWares);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);

// c toolkit___________________________________________
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//  } from 'redux-persist';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     contacts: contactsReducer,
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);
// export { store, persistor };
