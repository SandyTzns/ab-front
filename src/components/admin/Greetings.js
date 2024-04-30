import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import apiCalls from "../../service/apiCalls";

export default function Greetings() {
  const firstName = useSelector((state) => state.AUTH.firstName);
  const lastName = useSelector((state) => state.AUTH.lastName);

  const [editMode, setEditMode] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const handleEdit = () => {
    setEditMode(true);
    // Clear any previous input value
    setNewFirstName("");
    setNewLastName("");
  };

  const handleSave = async () => {
    try {
      await apiCalls.updateUser(newFirstName, newLastName);
      // dispatch(resetUser());
      setEditMode(false);
    } catch (error) {
      console.error("Error updating first name:", error);
    }
  };

  return (
    <div className="header">
      {editMode ? (
        <div>
          <h1>
            Welcome back
            <br />
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          </h1>

          <button onClick={handleSave} className="edit-button">
            Save
          </button>
        </div>
      ) : (
        <div>
          <h1>
            Welcome back
            <br />
            {firstName} {lastName} !
          </h1>
          <button onClick={handleEdit} className="edit-button">
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
}
