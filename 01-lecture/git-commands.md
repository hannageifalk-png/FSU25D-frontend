# Git Commands

* **git clone**: Downloads a copy of an existing remote repository (repo) to your local machine.
* **git status**: Shows which changes have been made, whether they are ready to be committed, or need to be added to the index (staging area) first.
* **git add .**: Adds all changed files to the index (staging area), preparing them to be committed. The dot (`.`) means all modified files in the working directory are included.
* **git commit -m "Comment"**: Creates a commit with a message comment describing the changes you've made.
* **git push**: Uploads your commits from the local Git repository to the remote repository (e.g., GitHub). This makes the changes available to other users.
* **git pull**: Fetches the latest changes from the remote repository and merges them with your current local branch.
* **git log**: Displays the history of previous commits in the project (hash values, authors, dates, and messages).
* **git checkout name-of-branch**: Switches to a different branch in the project.
* **git checkout -b name-of-branch**: Creates a new branch with the specified name and switches to it simultaneously.
* **git branch -D name-of-branch**: Deletes a branch.
* **git merge**: Integrates changes from a specified branch into your current active branch.

### To Connect a Local Repo to GitHub

1.  Go to GitHub and create an empty repo.
2.  Copy the URL to the repo (be careful whether it is SSH or HTTPS).

* **git remote add origin "URL to repo"**: Connects your local repository to the remote repository on GitHub, typically aliasing the remote as `origin`.
* **git branch -M main**: Renames the default branch from `master` to `main`.
* **git push -u origin main**: Pushes your local commits to the remote repository (`origin`) and sets the upstream tracking reference (`-u`).