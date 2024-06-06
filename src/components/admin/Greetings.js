import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import apiCalls from "../../service/apiCalls";
import { updateUser } from "../../store/auth/auth-slice";

export default function Greetings() {
  const firstName = useSelector((state) => state.AUTH.firstName);
  const lastName = useSelector((state) => state.AUTH.lastName);
  const token = useSelector((state) => state.AUTH.token);
  const isUpdatedMode = useSelector((state) => state.AUTH.isUpdatedMode);

  const [editMode, setEditMode] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const dispatch = useDispatch();

  const EditMode = () => {
    if (!editMode) {
      setNewFirstName("");
      setNewLastName("");
    }

    if (!newFirstName) {
      setNewFirstName(firstName);
    }
    if (!newLastName) {
      setNewLastName(lastName);
    }

    setEditMode(true);
  };

  const handleSaveBtn = async () => {
    try {
      // Check if both new first name and last name are empty
      if (!newFirstName && !newLastName) {
        // If both are empty, exit edit mode and return
        setNewFirstName(firstName);
        setNewLastName(lastName);
        setEditMode(false);
        return;
      }
      dispatch(updateUser({ newFirstName, newLastName }));
      setEditMode(false);
      await apiCalls.updateUser(token, newFirstName, newLastName);
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
              className="editMode_input"
              placeholder={firstName}
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
            <input
              type="text"
              className="editMode_input"
              placeholder={lastName}
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          </h1>

          <button onClick={handleSaveBtn} className="edit-button">
            Save
          </button>
        </div>
      ) : (
        <div>
          <h1>
            Welcome back
            <br />
            {isUpdatedMode
              ? `${newFirstName} ${newLastName}`
              : `${firstName} ${lastName}`}
            !
          </h1>
          <button onClick={EditMode} className="edit-button">
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
}
