# Git and GitHub Basics

## Introduction

Git is a distributed version control system designed to track changes in source code during software development. GitHub is a web-based platform that uses Git for version control, enabling collaboration among developers.

## Table of Contents

1. Introduction to Git
2. Installing Git
3. Basic Git Commands
   - `git init`
   - `git clone`
   - `git status`
   - `git add`
   - `git commit`
   - `git push`
   - `git pull`
   - `git branch`
   - `git checkout`
   - `git merge`
4. Types of Status in Git
5. Introduction to GitHub
6. Setting Up GitHub
7. Basic GitHub Workflow
8. Cloning a Repository
9. Pushing Changes to GitHub
10. Pull Requests
11. Additional Resources

## 1. Introduction to Git

Git is a version control system that allows you to track changes to files and collaborate with others on a project. It enables you to revert files to a previous state, compare changes over time, and work on different branches of a project simultaneously.

## 2. Installing Git

To install Git, follow the instructions for your operating system:

- **Windows**: Download Git from [git-scm.com](https://git-scm.com/) and follow the installation instructions.
- **macOS**: Install Git using Homebrew: `brew install git`
- **Linux**: Use the package manager for your distribution, e.g., `sudo apt-get install git` for Debian-based distributions.

Verify the installation by running:

```bash
git --version
```

## 3. Basic Git Commands

### Setting up Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### `git init`

Initializes a new Git repository in your project directory. This command creates a `.git` directory in the project, which stores all the metadata and object files for the repository.

Usage:

```bash
git init
```

### `git clone`

Creates a copy of an existing repository from a remote server (e.g., GitHub) to your local machine. This is useful for getting a working copy of a remote repository.

Usage:

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/user/repo.git
```

### `git status`

Displays the state of the working directory and the staging area. It shows which changes have been staged, which haven't, and which files are not being tracked by Git.

Usage:

```bash
git status
```

## 4. Types of Status in Git

When you run `git status`, you'll see files in one of the following statuses:

1. **Untracked**: These are files that are in your working directory but have not been added to the staging area. Git does not track these files until you explicitly tell it to do so.

   ```bash
   Untracked files:
     (use "git add <file>..." to include in what will be committed)
   ```

2. **Modified**: These are files that have been changed in your working directory but not yet staged. Git is aware of the changes but they are not yet ready to be committed.

   ```bash
   Changes not staged for commit:
     (use "git add <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
   ```

3. **Staged**: These are files that have been added to the staging area and are ready to be committed. Staged files are part of the next commit snapshot.

   ```bash
   Changes to be committed:
     (use "git restore --staged <file>..." to unstage)
   ```

### `git add`

Adds changes in the working directory to the staging area. This command tells Git that you want to include updates to a particular file in the next commit.

Usage:

```bash
git add <file-name>
```

To add all changes:

```bash
git add .
```

### `git commit`

Records the changes in the repository. Commits the staged changes to the repository with a message describing the changes. Each commit creates a unique ID that helps in tracking changes.

Usage:

```bash
git commit -m "Your commit message"
```

Example:

```bash
git commit -m "Add new feature"
```

### `git push`

Uploads local repository content to a remote repository. This command is used to transfer commits from your local repository to a remote server.

Usage:

```bash
git push <remote-name> <branch-name>
```

Example:

```bash
git push origin main
```

### `git pull`

Fetches and integrates changes from a remote repository to your local repository. It is a combination of `git fetch` and `git merge`.

Usage:

```bash
git pull <remote-name> <branch-name>
```

Example:

```bash
git pull origin main
```

### `git branch`

Lists all branches in your repository or creates a new branch. Branches are used to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository.

To list all branches:

```bash
git branch
```

To create a new branch:

```bash
git branch <branch-name>
```

Example:

```bash
git branch feature-branch
```

### `git checkout`

Switches to a different branch or restores files. This command is used to navigate between branches created by `git branch`.

To switch branches:

```bash
git checkout <branch-name>
```

Example:

```bash
git checkout main
```

To create and switch to a new branch:

```bash
git checkout -b <branch-name>
```

Example:

```bash
git checkout -b feature-branch
```

### `git merge`

Merges changes from one branch into another. This command allows you to combine the work done on different branches.

Usage:

```bash
git merge <branch-name>
```

Example:

```bash
git merge feature-branch
```

## 5. Introduction to GitHub

GitHub is a platform for hosting and collaborating on Git repositories. It provides a web interface for managing repositories and includes features such as bug tracking, feature requests, task management, and wikis for projects.

## 6. Setting Up GitHub

1. **Create an Account**: Sign up at [github.com](https://github.com/).
2. **Create a New Repository**: Click the "New" button on your dashboard and follow the prompts to create a new repository.

## 7. Basic GitHub Workflow

1. **Clone the repository**: `git clone <repository-url>`
2. **Create a branch**: `git checkout -b <branch-name>`
3. **Make changes and commit**: `git add .` and `git commit -m "Your message"`
4. **Push changes**: `git push origin <branch-name>`
5. **Create a pull request**: On GitHub, go to your repository and click the "Compare & pull request" button.

## 8. Cloning a Repository

To clone a repository from GitHub:

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/user/repo.git
```

## 9. Pushing Changes to GitHub

After committing your changes locally, you can push them to GitHub:

```bash
git push origin <branch-name>
```

Example:

```bash
git push origin main
```

## 10. Pull Requests

Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

## 11. Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Pro Git Book](https://git-scm.com/book/en/v2)
