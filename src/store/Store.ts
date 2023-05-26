import {createStore} from 'redux';
import { tokenReducer } from './tokens/Reducer';

const store = createStore(tokenReducer);

export default store;