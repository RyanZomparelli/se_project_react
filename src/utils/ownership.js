// Normalize ownership checks across the app so we can safely compare
// different shapes (owner id string vs populated owner object) to the
// current user's id without duplicating this logic in multiple places.
export const isOwnedByCurrentUser = (itemOwner, currentUser) => {
  if (!itemOwner || !currentUser) return false;

  const currentId = currentUser.user?._id || currentUser._id;
  if (!currentId) return false;

  if (typeof itemOwner === "string") {
    return itemOwner === currentId;
  }

  if (typeof itemOwner === "object") {
    return itemOwner._id === currentId;
  }

  return false;
};

