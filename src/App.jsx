import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  // Fetch users from API on component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Filter users by name based on input
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>User List from API</h1>

      {/* Optional filter input */}
      <input
        type="text"
        placeholder="Filter users by name..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      {/* Display filtered list of user names */}
      {filteredUsers.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default UserList;