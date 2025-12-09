import { createContext } from "react";

// User context doesn't need defaults because:
//  - Users can be logged out (no user data),
//  - Components should handle the "no user" case explicitly,
//  - The actual user data comes from your API, not defaults.
const CurrentUserContext = createContext();

export default CurrentUserContext;
