import { useContext } from "react";
import { ModalContext } from "../../../../context/ModalContext";
import "./TasksHeader.css";

export default function TasksHeader() {
  const { handleModalToggle } = useContext(ModalContext);

  return (
    <div className="db-tasks-header">
      <div className="db-tasks-total">
        <h2>Tasks</h2>
        <h4>18 total</h4>
      </div>
      <div className="db-tasks-done">
        <h2>13</h2>
        <h4>Done</h4>
      </div>
      <div className="db-tasks-in-progress">
        <h2>5</h2>
        <h4>In progress</h4>
      </div>
      <div className="db-add-tasks">
        <h3>Add task</h3>
        <i
          className="fa-solid fa-circle-plus"
          onClick={handleModalToggle}
        ></i>
      </div>
    </div>
  );
}
