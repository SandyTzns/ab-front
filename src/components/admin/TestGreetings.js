import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import apiCalls from "../../service/apiCalls";
import { resetUser, updateUser } from "../../store/auth/auth-slice";

export default function TestGreetings() {
  const firstName = useSelector((state) => state.AUTH.firstName);
  const lastName = useSelector((state) => state.AUTH.lastName);
  const token = useSelector((state) => state.AUTH.token);

  const [editMode, setEditMode] = useState(false);

  // const newFirstName = useSelector((state) => state.AUTH.newFirstName);
  // const newLastName = useSelector((state) => state.AUTH.newLastName);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const dispatch = useDispatch();

  const EditMode = () => {
    setEditMode(true);
    setNewFirstName("");
    setNewLastName("");
  };

  const handleSaveBtn = async () => {
    try {
      dispatch(updateUser({ newFirstName, newLastName }));
      setEditMode(false);

      await apiCalls.updateUser(token, newFirstName, newLastName);
      dispatch(resetUser());
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
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              // onChange={(e) =>
              //   dispatch(
              //     updateUser({ newFirstName: e.target.value, newLastName })
              //   )
              // }
            />
            <input
              type="text"
              className="editMode_input"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              // onChange={(e) =>
              //   dispatch(
              //     updateUser({ newFirstName, newLastName: e.target.value })
              //   )
              // }
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
            {firstName} {lastName} !
          </h1>
          <button onClick={EditMode} className="edit-button">
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
}
