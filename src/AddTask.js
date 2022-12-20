import { motion } from "framer-motion";

const AddTask = ({ handleSubmit, text, setText, error }) => {
  

  

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="What needs to be done?"
          onChange={(e) => setText(e.target.value)}
        />

        <motion.button className="add-button" 
          style={{ backgroundColor: "transparent" }}
          whileHover={{ scale: 1.1 }} 
        >
          Add
        </motion.button>
        <p
          style={{
            display: !error ? "none" : "",
            color: "red",
          }}
        >
          Please add a task
        </p>
      </form>
    </div>
  );
};
export default AddTask;
