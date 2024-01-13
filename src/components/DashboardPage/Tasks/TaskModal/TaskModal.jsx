import { useContext, useState } from "react";
import { ModalContext } from "../../../../context/ModalContext";
import "./TaskModal.css";

const allTasks = {};

const newTask = {
  taskName: "",
  admin: "",
  priority: "",
  status: "",
  due: "",
};

export default function TaskModal() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [admin, setAdmin] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [due, setDue] = useState("");

  const { handleModalToggle } = useContext(ModalContext);

  console.log(tasks);

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        taskName,
        admin,
        priority,
        status,
        due,
      },
    ]);
  };

  return (
    <div className="task-modal">
      <div className="task-modal-container">
        <div>
          <p>Task Name</p>
          <input
            required
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div>
          <p>Admin</p>
          <input
            required
            type="text"
            onChange={(e) => setAdmin(e.target.value)}
          />
        </div>
        <div>
          <p>Priority</p>
          <input
            required
            type="text"
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>
        <div>
          <p>Status</p>
          <input
            required
            type="text"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <p>Due by</p>
          <input
            required
            type="text"
            onChange={(e) => setDue(e.target.value)}
          />
        </div>
        <button onClick={addTask}>submit</button>
      </div>
      {tasks.length > 0 && <p>{tasks[0].taskName}</p>}{" "}
    </div>
  );
}
