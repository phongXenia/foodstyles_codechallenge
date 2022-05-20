import { IAuthState } from '@app/src/features/auth/redux/auth.type';
import { reducers } from '@app/src/redux/reducers';
import AsyncStorage from '@react-native-community/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig: PersistConfig<IReducerState> = {
  storage: AsyncStorage,
  key: 'root',
  stateReconciler: autoMergeLevel2,
  blacklist: ['auth'],
};

const serializableCheck = {
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
};

const persistedReducer = persistReducer<IReducerState>(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck });
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

interface IReducerState {
  auth: IAuthState & PersistPartial;
}
