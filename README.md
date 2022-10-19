<!-- <p align="center">
    LOGO
</p> -->

# Olimpo Frontend
In this repository are the files and the frontend project.

## Project brief
Olimpo is a knowledge management system, which aims to help Teaching and Students to improve the absorption of knowledge.

## Links
+ [Wireframe](https://www.figma.com/file/GGb7PZGsTpzjhcZDt4ttDu/Untitled?node-id=0%3A1)
+ [Notion](https://www.notion.so/Team-Home-f6436a085756411387b82bca9b436481)

## Technology   

* **[Typescript](https://www.typescriptlang.org/)** - TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language. 
* **[React](https://reactjs.org/)** - React is an open source JavaScript library focused on creating user interfaces on web pages. 
* **[Playwright](https://playwright.dev/)** - Playwright enables reliable end-to-end testing for modern web apps.

### Requirements

## First Steps

Initially, clone the repository:

```
git clone https://github.com/lima-vinicius/olimpo-if977-frontend.git
```

Enter the project folder:

```
cd olimpo-if977-frontend
```

### Running the Project

```
npm install
```

```
npm start
```

## GitHub

### Branches
They can be:
+ master
+ feature
+ bugfix
+ hotfix

Their names must follow this template: `feature/branch-name`

### Commits
Must begin with the name of the branch you developed on, following the model: _“Feature(name-of-feature) : What was done…”._

Must be simple and show briefly what you just did.

- Ex: `git commit -m “Feature(issue_name) : Added ...”`
- Ex: `git commit -m “Bugfix(issue_name) : Changed ...”`
- Ex: `git commit -m “Hotfix(issue_name) : Fix ...”`

### Pull Requests
First, proceed with _rebase_:
1. _commit_ the changes on your branch
2. Go to the original branch (master) with `git checkout master`
3. Run `git pull`
4. Go back to your branch with `git checkout "your-branch"`
5. Run `git rebase master`
6. Follow the steps to conclude the _rebase_, solving conflicts and running `git add .` and then `git rebase --continue`
7. When finished rebasing, run `git push -f origin "your-branch"`. Now your Pull Request can be opened on GitHub.

Use this template for the pull request body:
```
### Issue Name
**What I did:**
- First thing I did...
- Second thing I did...
**How to test:**
- First step to execute the project...
- Second step to execute the project...
```

## Team
* **Vinícius Lima** - *Desing/Front-end/Back-end* - vrpl@cin.ufpe.br - [lima-vinicius](https://github.com/lima-vinicius)
* **Valter Junior** - *Front-end/Back-end* - vjsj@cin.ufpe.br - [valter-junior](https://github.com/valter-junior)
* **Lucas da Silva** - *Front-end/Back-end* - lls3@cin.ufpe.br - [LucasLeoSil](https://github.com/LucasLeoSil)
