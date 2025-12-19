function UserList() {
  const users = [
    { id: 1, name: "Arun", age: 25 },
    { id: 2, name: "Karthik", age: 30 },
    { id: 3, name: "Meena", age: 22 }
  ];

  return (
    <div>
      <h2>8.User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
