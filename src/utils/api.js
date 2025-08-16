export const baseUrl = "http://localhost:3001";

//Pass baseUrl as a default value for the parameter but avoid shadowing
export function getClothingItems(base = baseUrl) {
  return fetch(`${base}/items`).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP: ${res.status}`);
    }
    return res.json();
  });
}
