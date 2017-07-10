/**
 * Created by satuk on 10.07.17.
 */
import {ADD_ORGANIZATION, ADD_ORGANIZATIONS, API} from "../constants";

const addOrganization = (organization) => ({
  type: ADD_ORGANIZATION,
  payload: { organization },
});

const addOrganizations = (organizations) => ({
  type: ADD_ORGANIZATIONS,
  payload: { organizations },
});

export const fetchOrganizations = () => ({
  type: API,
  url: '/api/companies',
  success: addOrganizations,
});

export const fetchOrganization = (id) => ({
  type: API,
  url: '/api/companies/' + id,
  success: addOrganization,
});
