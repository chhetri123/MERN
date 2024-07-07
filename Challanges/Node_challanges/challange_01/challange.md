# Challenge: Extend the Note-Taking CLI Application

## Objective

Your task is to extend the provided Note-Taking CLI application with additional functionality. You need to implement the following features:

### 1. Edit a Note

- **Command**: `edit`
- **Description**: Edit the content of an existing note.
- **Usage**: `node app.js edit <title> <new content>`
- **Details**: If the note with the specified title exists, update its content with the new content provided. If the note does not exist, display an appropriate message.

### 2. Search Notes by Content

- **Command**: `search`
- **Description**: Search for notes containing a specific keyword or phrase.
- **Usage**: `node app.js search <keyword>`
- **Details**: List all notes that contain the specified keyword in their content. Display the titles of the matching notes.

### 3. Tagging Notes

- **Command**: `tag`
- **Description**: Add tags to a note and search notes by tags.
  - **Add Tag**: `node app.js tag add <title> <tag>`
    - **Details**: Add a tag to a specific note. If the note does not exist, display an appropriate message.
  - **Search by Tag**: `node app.js tag search <tag>`
    - **Details**: List all notes that are tagged with the specified tag. Display the titles of the matching notes.

### 4. Display Note Details

- **Command**: `details`
- **Description**: Display the details of a note, including title, content, and tags.
- **Usage**: `node app.js details <title>`
- **Details**: If the note with the specified title exists, display its title, content, and any tags associated with it. If the note does not exist, display an appropriate message.

---

Implement these functionalities in the provided CLI application and ensure they work as described.
