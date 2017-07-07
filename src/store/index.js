/**
 * Created by satuk on 04.07.17.
 */
import {applyMiddleware, createStore} from "redux"; // check we also require `applyMiddleware`
import thunk from "redux-thunk"; // require the Middleware
import reducers from "./reducers";
import apiMiddleware from "./apiMiddleware";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, apiMiddleware)
);

export default store;
