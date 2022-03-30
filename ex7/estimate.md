| index | Task activity activity activity description                                                                                                                                                                                                                     | time  | Input | Output | Action status | Comment |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ----- | ------ | ------------- | ------- |
| 1     | what is the git, gitHub?                                                                                                                                                                                                                                        | 10'   |       |        |               |         |
| 2     | what is Git and produce a list of good thing that Git brings us?                                                                                                                                                                                                | 10'   |       |        |               |         |
| 3     | Why we need to use git?                                                                                                                                                                                                                                         | 10'   |       |        |               |         |
| 4     | Some basic command and how to use ? + log ,checkout ,reset ,Revert ,push ,fetch ,merge ,Pull request,Resolve conflict, ....                                                                                                                                     | 1h30' |       |        |               |         |
| 5     | Some concepts about git: Working dir ,Repository, brand,Staging area,.gitignore                                                                                                                                                                                 | 30'   |       |        |               |         |
| 6     | Write a good git message                                                                                                                                                                                                                                        | 10'   |       |        |               |
| 7     | List of possible issues when a commit is broken                                                                                                                                                                                                                 |       |       |        |               |         |
| 8     | Explain the nature of a branch in Git and Can use it to outline a list of possible issues when a branch has problems                                                                                                                                            | 15'   |       |        |               |         |
| 9     | Explain why do we need to use Git and can create a good summary for it                                                                                                                                                                                          | 20'   |       |        |               |         |
| 10    | What could cause code conflicts and produce a checklist of possible causes                                                                                                                                                                                      | 20'   |       |        |               |         |
| 11    | Explain the difference between merge and rebase and can combine the good and bad of merge and rebase when working on a project                                                                                                                                  | 15'   |       |        |               |         |
| 12    | Select situation to use merge                                                                                                                                                                                                                                   | 15'   |       |        |               |         |
| 13    | Why are we using merge for the current workflow and write out a good and detailed report for out client when they asked                                                                                                                                         | 20'   |       |        |               |         |
| 14    | When we are creating new feature, what branch should we based on and why?                                                                                                                                                                                       | 15'   |       |        |               |         |
| 15    | If we have a feature branch that haven't been merged to production and that branch have bug,what course of action are you going to do with Git to before resolving the bug?                                                                                     | 15'   |       |        |               |         |
| 16    | If someone accidentally merge a feature (feature/delete-user) onto production and have a list of commitId ended with (0492978, fc9348c, k101100), then another commit (a1fsas8) is added on top of the production branch. How do we remove that merged feature? | 30'   |       |        |               |         |

# 1. what is the git/git hub

- Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel
- GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code

# 2. what is Git and produce a list of good thing that Git brings us?

- Manage source code easily
- Track changes between versions
- Github helps improve coding skills, bug tracking
- Github is a great resource

# 3. Why we need to use git?

- It will be easier after a while to go back to the project based on the commit to find the bug.
- Find what you did easier.
- Speed up the review process.
- Note: the message cannot exceed 50 characters

# 4. log ,checkout ,reset ,Revert ,push ,fetch ,merge ,Pull request,Resolve conflict

- Git checkout - filename, we can delete files before adding to staging.
- Git checkout - b "name branch", we can create a new branch.
- Git checkout - d "name branch", we can delete a branch.

- Git reset --Soft back to staging area state after using git add.
- Git reset --mexid back to working directory.
- Git reset --hard remove code change.

- Git revert Delete the old commit, it's dangerous to have other commits work on the same file, so create a new commit to rollback that change

- Git push The git push command is used to push new commits from the local repo to the server

- Git fetch The git fetch command is a git command, used to download content from the Remote repository without changing the state of the local repository.

- Git merge is a command used to merge independent branches into a single branch in Git

- Pull request is create a request to merge code to another branch.

- Git resolve conflict happens when two or more people change the same file

# 5. Some concepts about git: Working directory ,Repository, brand,Staging area,.gitignore

- working directory changes in current working directory
- Git repository is area Commit changes
- Staging area is the one that is committed only after adding git
- Branch shows the split of versions when two versions have a certain difference and two versions are different.

# 6. Write a good git message

- It will be easier after a while to go back to the project based on the commit to find the bug.
- Find what you did easier.
- Speed up the review process.
- Note: the message cannot exceed 50 characters
  git commit -m "[GENERAL ACTION] - [DETAILS] - [NOTE IF YES]"

# 7. List of possible issues when a commit is broken

It allows you to combine staged changes with the previous commit as an alternative for creating an entirely new commit

# 8. Explain the nature of a branch in Git and Can use it to outline a list of possible issues when a branch has problems

- When a brand has a problem, we can check the list of commits to find the reason for that we can easily resolve the problem.

# 9. What could cause code conflicts and produce a checklist of possible causes

- Merge code, Pull, cherry pick, stash, rebase.

* Git cherry picking
  Is a way to check out any commit at a specified branch to the current branch. Or git cherry-pick will pick up the changes of a commit on a certain branch and apply it to the current branch.
* stash
  you don't want to commit yet and want to switch to another branch, git will ask you to commit the changes before switching branch.

# 10. Explain the difference between merge and rebase and can combine the good and bad of merge and rebase when working on a project

- Git Rebase is a function used when linking the completed branch to the root
- Git Merge is the command used to merge independent branches into a single branch in Git
  | Rebase |Merge |
  |----------------------------------------------|-----------------------------------------------|
  |The branch commit will be completely recorded |The branch commit will be completely unrecorded|
  |shorter commit list| longer commit list|

- Git rebase should be used on its own branch, it will display the commit history of the branch, the commit history will be distinguished from the commits from other branches, very convenient for branch management.

# 11. Select situation to use merge

- When a feature is complete We want to merge it with the master branch.
- Resolve conflicts between 2 branches.

# 12. Why are we using merge for the current workflow and write out a good and detailed report for out client when they asked.

- When client ask detail report , we need a most accurate report and Guaranteed complete features with no errors, so that the current workflow ensures this.

# 13. When we are creating new feature, what branch should we based on and why?

- we should create a new branch when we want to create a new feature and we should rely on master branch because it is less buggy and more considered when merging
- When we create a project we create a branch with the setup environment if you can't depend on any commit you can base it on the first commit in the project.

# 14. If we have a feature branch that haven't been merged to production and that branch have bug ,what course of action are you going to do with Git to before resolving the bug?
- Commit code current branch.
- Checkout to feature branch.
- Fix code in feature branch.
# 15. If someone accidentally merge a feature (feature/delete-user) onto production and have a list of commitId ended with (0492978,fc9348c, k101100), then another commit (a1fsas8) is added on top of the production branch. How do we remove that merged feature?
- Using git reset --mixed command to move commit (0492978,fc9348c, k101100) to working directory.

# 1
# 2xczz