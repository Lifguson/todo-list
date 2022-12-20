import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const EditTask = ({
  editedTask,
  updateTask,
  closeEditMode,
  error,
  showModal,
  setShowModal,
}) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.text);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, text: updatedTaskName });
  };

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const modalVariants = {
    initial: {
      y: "-100vh",
      opacity: 0,
    },
    animate: {
      y: "200px",
      opacity: 1,
      transition: { delay: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.div
            className="edit-input"
            role="dialog"
            aria-labelledby="editTask"
            onClick={(e) => {
              e.target === e.currentTarget && closeEditMode();
            }}
            variants={modalVariants}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="editTask"
                value={updatedTaskName}
                placeholder="Edit task"
                onInput={(e) => setUpdatedTaskName(e.target.value)}
                required
                autoFocus
              />
              <motion.button
                className="update-button"
                type="submit"
                aria-label={`confirm edited task to now read ${updatedTaskName}`}
                style={{ backgroundColor: "transparent" }}
                whileHover={{ scale: 1.1 }}
              >
                Update
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditTask;
