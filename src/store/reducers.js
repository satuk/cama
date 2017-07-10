/**
 * Created by satuk on 06.07.17.
 */
import {ADD_EVENT, ADD_EVENTS, ADD_ORGANIZATION, ADD_ORGANIZATIONS} from "./constants";
import {combineReducers} from "redux";

const events = (state = {}, action) => {
  switch ( action.type ) {
    case ADD_EVENTS:
      return  action.payload.events.reduce((acc, event) => {
        acc[event.id] = event;
        return acc;
      }, {});
    case ADD_EVENT:
      const { event } = action.payload;
      return Object.assign({}, state, { [event.id]: event });
    default:
      return state;
  }
};

const organizations = (state = {}, action) => {
  switch ( action.type ) {
    case ADD_ORGANIZATIONS:
      return action.payload.organizations.reduce((acc, organization) => {
        acc[organization.id] = organization;
        return acc;
      }, {});
    case ADD_ORGANIZATION:
      const { organization } = action.payload;
      return Object.assign({}, state, { [organization.id]: organization });
    default:
      return state;
  }
};

export default combineReducers({
  events,
  organizations,
});
