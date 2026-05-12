# Git

Use this page to keep practical Git commands, workflows, and recovery notes.

## Store several users in git credential manager.
1. Configure a namespace for each account
``` bash
git config --global credential.personal.namespace personal
git config --global credential.personal.name Edmund Wong
git config --global credential.personal.email changechun.huang@gmail.com
git config --global credential.personal.helper manager
```

2. Using a different namespace name for work.
``` bash
git config --global credential.work.namespace work
git config --global credential.work.name Edmund Wong
git config --global credential.work.email edmundwongcc@sjmresorts.com
git config --global credential.work.helper manager
```

3. Tell each local repository which namespace to use
``` bash
git config credential.namespace personal 
//or git config credential.namespace work 
```

## Common checks

```powershell
git status
git branch
git log --oneline --decorate -10
```

## Review changes

```powershell
git diff
git diff --staged
git show HEAD
```

## Branch workflow

```powershell
git switch main
git pull
git switch -c feature/my-change
```

## Commit workflow

```powershell
git add .
git commit -m "Describe the change clearly"
```

## Useful recovery commands

```powershell
git restore path/to/file
git restore --staged path/to/file
git stash push -m "work in progress"
git stash list
git stash pop
```

## Notes

- Prefer small, focused commits.
- Review `git diff` before every commit.
- Avoid destructive commands unless you are certain about the rollback path.