import Task from "./Task";

const TaskList = ({ taskList, setTaskList }) => {
  
  return (
    <div className="task-list">
      {taskList.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            text={task.text}
            setTaskList={setTaskList}
            taskList={taskList}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
