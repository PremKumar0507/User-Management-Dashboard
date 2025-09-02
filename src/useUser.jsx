import { useEffect, useState } from "react";
import { fetchUsers } from "./server";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        const enhanced = data.map((user) => ({
          ...user,
          role: "User",
          status: "Active",
        }));
        setUsers(enhanced);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  return { users, setUsers, loading, error };
}
