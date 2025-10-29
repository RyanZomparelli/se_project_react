/*
Security concerns with localStorage:
  - XSS vulnerability: If your app has any XSS vulnerabilities, malicious scripts 
    can access localStorage and steal tokens.
  - No expiration control: Tokens persist until manually removed.
  - Accessible to any JavaScript: Any script running on your domain can read it.
  More secure alternatives:
  - HttpOnly cookies: Server sets cookies that JavaScript can't access.
  - Secure, SameSite cookies: Additional protection against CSRF attacks.
  - Short-lived tokens: With refresh token rotation. 
  */

// This will serve as the key for the key/value pair in localStorage.
const TOKEN_KEY = "jwt";

// setItem, getItem, removeItem are all methods of the global localStorage object.

// setItem takes a key and value to store in localStorage.
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// getToken will check localStorage for the key, 'jwt'.
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// For sign out removeItem looks in localStorage for the provided key and removes it.
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
