import { ProductReducer } from "./reducer/ProductReducer";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  product: ProductReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
