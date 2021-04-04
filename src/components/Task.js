import { FaTrash } from "react-icons/fa";

const Task = ({ task, onDelete, toggleReminder }) => {

  const formattedday = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric', minute: 'numeric',
    month: 'long', day: 'numeric'
  }).format(new Date(new Date(task.day).toUTCString()))

  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.taskname}
        <FaTrash
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>

      <p>{formattedday}</p>

      <p
        onClick={() => toggleReminder(task.id)}
        style={{
          color: task.reminder ? "red" : "#738678",
          cursor: "pointer",
          userSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
        }}>
        {task.reminder ? "Remove reminder" : "Add reminder"}
      </p>
    </div>
  );
};

export default Task;
