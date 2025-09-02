import React from "react";

function UserCard({ user, onToggleStatus, onEdit, onDelete }) {
  return (
    <div className={`user-card ${user.status === "Active" ? "active" : "inactive"}`}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Status: {user.status}</p>
      <div className="actions">
        <button onClick={onToggleStatus}>Toggle Status</button>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default UserCard;
