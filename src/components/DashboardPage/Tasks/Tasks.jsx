import "./Tasks.css";
import TasksHeader from "./TasksHeader/TasksHeader";

export default function Tasks() {
  return (
    <section className="dashboard-tasks">
      <TasksHeader />
      <table className="dashboard-tasks-table">
        <tr className="db-tasks-column-names">
          <th>
            <input type="checkbox" />
          </th>
          <th>Task name</th>
          <th>Admin</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Created</th>
          <th>Due by</th>
        </tr>
        <tr className="db-tasks-column-cells">
          <td>
            <input type="checkbox" />
          </td>
          <td>Complete assignment</td>
          <td>Eddie M.</td>
          <td>High</td>
          <td>In progress</td>
          <td>12/15/23</td>
          <td>12/19/23</td>
        </tr>
        <tr className="db-tasks-column-cells">
          <td>
            <input type="checkbox" />
          </td>
          <td>Complete assignment</td>
          <td>Eddie M.</td>
          <td>High</td>
          <td>In progress</td>
          <td>12/15/23</td>
          <td>12/19/23</td>
        </tr>
        <tr className="db-tasks-column-cells">
          <td>
            <input type="checkbox" />
          </td>
          <td>Complete assignment</td>
          <td>Eddie M.</td>
          <td>High</td>
          <td>In progress</td>
          <td>12/15/23</td>
          <td>12/19/23</td>
        </tr>
      </table>
    </section>
  );
}
