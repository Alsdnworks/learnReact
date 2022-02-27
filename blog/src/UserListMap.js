import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserListMap() {
  const users = [
    {
      id: 1,
      username: 'first',
      email: 'id1'
    },
    {
      id: 2,
      username: 'second',
      email: 'id2'
    },
    {
      id: 3,
      username: 'third',
      email: 'id3'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserListMap;