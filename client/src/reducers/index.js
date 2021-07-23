import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

const persistConfig = {
    "key":'root',
    storage,
    whitelist:['auth']
};

const rootReducer = combineReducers({
    alert,
    auth,
    profile,
    post
  });

  export default persistReducer(persistConfig, rootReducer)