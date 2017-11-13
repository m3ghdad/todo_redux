import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

// const configureStore = (preloadedState = {}) => {
//   const store = createStore(rootReducer, preloadedState);
//   return store;
// }

const configureStore = createStore(rootReducer);

export default configureStore;
