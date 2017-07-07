/**
 * Created by satuk on 06.07.17.
 */
import {ADD_EVENT, ADD_EVENTS} from "./constants";
import {combineReducers} from "redux";

const events = (state = {}, action) => {
  switch ( action.type ) {
    case ADD_EVENTS:
      const newState = action.payload.events.reduce((acc, event) => {
        acc[event.id] = event;
        return acc;
      }, {});
      return Object.assign({}, state, newState);
    case ADD_EVENT:
      const { event } = action.payload;
      return Object.assign({}, state, { [event.id]: event });
    default:
      return state;
  }
};

export default combineReducers({
  events,
});
