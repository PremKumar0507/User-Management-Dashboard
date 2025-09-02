import React, { useState } from "react";

function EditModal({ user, onSave, onClose }) {
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const handleSubmit = () => {
    onSave({ ...user, name, role });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit User</h3>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Role:
          <input value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
