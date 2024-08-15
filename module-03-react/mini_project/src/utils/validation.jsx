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

export const validateUser = (user) => {
  const errors = {};

  if (!user.name || user.name.trim() === "") {
    errors.name = "Name is required.";
  } else if (user.name.length < 3 || user.name.length > 50) {
    errors.name = "Name should be in range 3-50 characters.";
  }

  if (!user.email || !user.email.includes("@")) {
    errors.email = "Invalid email address.";
  }

  return errors;
};
