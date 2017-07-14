/**
 * Created by satuk on 04.07.17.
 */
import {ADD_EVENT, ADD_EVENTS, API, SEARCH_QUERY} from "../constants";

const addEvent = (event) => ({
  type: ADD_EVENT,
  payload: { event },
});

const addEvents = (events) => ({
  type: ADD_EVENTS,
  payload: { events },
});

export const fetchEvents = () => ({
  type: API,
  url: '/api/events',
  success: addEvents,
});

export const fetchEventsByCompany = (id) => ({
  type: API,
  url: '/api/companies/' + id + '/events',
  success: addEvents,
});

export const searchEvents = (searchText) => ({
  type: API,
  url: '/api/events/' + SEARCH_QUERY + searchText,
  success: addEvents,
});
