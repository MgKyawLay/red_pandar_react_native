import {combineReducers, configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import counterSlice from './Slices/counterSlice';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
    counter: counterSlice,
})

const persistReducer:any = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: true,
    })
})

export const persistor = persistStore( store)


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
