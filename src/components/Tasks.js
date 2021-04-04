import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  return (
    <>
      <p
        style={{color: tasks.length === 0 ? "red" : "black" }}>
        {tasks.length} tasks added{" "}
      </p>
      <br></br>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
