import React, { useState } from "react";
import UserCard from "./UserCard";
import EditModal from "./EditModel";
import ConfirmModal from "./ConformModel";

function UserList({ users, setUsers }) {
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u
      )
    );
  };

  const saveUser = (updatedUser) => {
    setUsers((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    setDeletingUser(null);
  };

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onToggleStatus={() => toggleStatus(user.id)}
          onEdit={() => setEditingUser(user)}
          onDelete={() => setDeletingUser(user)}
        />
      ))}

      {editingUser && (
        <EditModal
          user={editingUser}
          onSave={saveUser}
          onClose={() => setEditingUser(null)}
        />
      )}

      {deletingUser && (
        <ConfirmModal
          message={`Are you sure you want to delete ${deletingUser.name}?`}
          onConfirm={() => deleteUser(deletingUser.id)}
          onCancel={() => setDeletingUser(null)}
        />
      )}
    </div>
  );
}

export default UserList;
