import React from "react";
import { useUsers } from "./useUser";
import UserList from "./Userlist";
import SkeletonLoader from "./ske";

function App() {
  const { users, setUsers, loading, error } = useUsers();

  if (loading) return <SkeletonLoader />;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="app">
      <h1>User Management Dashboard</h1>
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
