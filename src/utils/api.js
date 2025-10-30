export const baseUrl = "http://localhost:3001";

export function handleResponse(res) {
  // Parse the response even for errors to have access to the err.message than throw
  // it to the catch block.
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

//Avoid variable shadowing but pass baseUrl as a default value for the parameter
export function getClothingItems(base = baseUrl) {
  //Shorthand syntax: .then() automatically passes the resolved value (res as the first argument to handleResponse.
  // Equivalent to .then((res) => handleResponse(res)).
  return fetch(`${base}/items`).then(handleResponse);
}

//I just spent longer than I want to admit on a bug where my object kept returning undefined.
//The culprit? A parameter order bug. I had the 'base' parameter and the object flipped: (base = baseUrl, { name, imageUrl, weather })
//but in my App component, I was only calling the function with the object which was being mapped to base.
export function addClothingItem({ name, imageUrl, weather }, base = baseUrl) {
  return fetch(`${base}/items`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleResponse);
}

export function removeClothingItem(id, base = baseUrl) {
  return fetch(`${base}/items/${id}`, {
    method: "DELETE",
  }).then(handleResponse);
}
