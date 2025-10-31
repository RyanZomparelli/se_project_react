// 'DRY' HELPERS

export const baseUrl = "http://localhost:3001";

export const getRequestHeaders = (token = null) => {
  if (!token)
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export function handleResponse(res) {
  // Parse the response even for errors to have access to the err.message than throw
  // it to the catch block.
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

// API REQUESTS

//Avoid variable shadowing but pass baseUrl as a default value for the parameter
export function getClothingItems(base = baseUrl) {
  return fetch(`${base}/items`, {}).then(handleResponse);
}

//I just spent longer than I want to admit on a bug where my object kept returning undefined.
//The culprit? A parameter order bug. I had the 'base' parameter and the object flipped: (base = baseUrl, { name, imageUrl, weather })
//but in my App component, I was only calling the function with the object which was being mapped to base.
export function addClothingItem(
  { name, imageUrl, weather },
  token,
  base = baseUrl
) {
  return fetch(`${base}/items`, {
    method: "POST",
    headers: getRequestHeaders(token),
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
    //Shorthand syntax: .then() automatically passes the resolved value (res as the first argument to handleResponse.
    // Equivalent to .then((res) => handleResponse(res)).
  }).then(handleResponse);
}

export function removeClothingItem(id, base = baseUrl) {
  return fetch(`${base}/items/${id}`, {
    method: "DELETE",
  }).then(handleResponse);
}

export const editProfile = ({ name, avatar }, token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: getRequestHeaders(token),
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(handleResponse);
};
