import { baseUrl, handleResponse } from "./api";

export const register = ({ email, password, name, avatar }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      avatar,
    }),
  }).then(handleResponse);
};

// WTWR API: The /signin route in the WTWR API finds the user with the provided
// credentials, creates a token with the user id, and return's only the JWT.
// AUTHENTICATION: Verifies credentials and issues a JWT token.
export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(handleResponse);
};

// WTWR API: /users/me is a protected route that takes a JWT and and returns
// user info.
// AUTHORIZATION: Uses the token to access protected user data.
export const getCurrentUser = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};
