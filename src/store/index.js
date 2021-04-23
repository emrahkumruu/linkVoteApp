import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import linkAdd from './linkAdd';
import linkList from './linkList';

const reducer = combineReducers({
    linkAdd,
    linkList
});

const store = configureStore({ reducer });

export default store;