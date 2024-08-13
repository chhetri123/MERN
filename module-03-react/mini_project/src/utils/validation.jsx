export const validateTask = (task) => {
  const errors = {};

  if (!task.title || task.title.trim() === "") {
    errors.title = "Title is required.";
  } else if (task.title.length < 5 || task.title.length > 50) {
    errors.title = "Title should be in range 5-50 characters.";
  }

  if (!task.description || task.description.trim() === "") {
    errors.description = "Description is required.";
  } else if (task.description.length < 5 || task.description.length > 200) {
    errors.description = "Description should be in range 5-200 characters.";
  }

  if (!["pending", "completed"].includes(task.status)) {
    errors.status = "Invalid status value.";
  }

  return errors;
};
