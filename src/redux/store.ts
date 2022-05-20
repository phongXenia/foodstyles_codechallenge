import {IAuthState} from '@app/src/features/auth/redux/auth.type';
import {reducers} from '@app/src/redux/reducers';
import AsyncStorage from '@react-native-community/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import {PersistPartial} from 'redux-persist/es/persistReducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig: PersistConfig<IReducerState> = {
  storage: AsyncStorage,
  key: 'root',
  stateReconciler: autoMergeLevel2,
  blacklist: ['auth'],
};

// const serializableCheck = {
//   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// };

const persistedReducer = persistReducer<IReducerState>(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware({serializableCheck});
  // },
});

interface IReducerState {
  auth: IAuthState & PersistPartial;
}
