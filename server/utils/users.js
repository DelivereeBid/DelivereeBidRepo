const users = [];

// Join user to chat
/* istanbul ignore next */
function userJoin(id, username, room) {
  const user = { id, username, room };
  
  users.push(user);
  
  return user;
}

// Get current user
/* istanbul ignore next */
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
/* istanbul ignore next */
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);
  
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
/* istanbul ignore next */
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
