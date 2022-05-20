import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@app/src/features/auth/redux/auth.slice';
import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['isLoading'],
};

export const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});
