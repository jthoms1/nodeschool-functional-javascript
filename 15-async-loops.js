'use strict';

function loadUsers(userIds, load, done) {
  let users = [];
  let numberReturned = 0;

  userIds.forEach((id, index) => {
    load(id, (user) => {
      numberReturned += 1;
      users[index] = user;

      if (numberReturned === userIds.length) {
        done(users);
      }
    });
  });
}

module.exports = loadUsers;
