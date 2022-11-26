import Task from "./Task";

const TaskList = ({ taskList, setTaskList }) => {

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  
  return (
    <div className="task-list">
      {taskList.map((task) => {
        return (
          <Task 
            task={task}
            taskList={taskList}
            key={task.id}
            newTask={task.value}
            setTaskList={setTaskList}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
