# Bootstrap Typescript Library

The purpose of this repository is to provide a foundation for quickly starting new library projects in TypeScript.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Visual Studio Code extensions

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

## Requirements

- [x] TypeScript
- [x] Prettier
- [x] ESLint
- [x] Jest
- [x] Compodoc
- [x] Husky
- [x] CommitLint

### To Do List

- [x] Add and configure TypeScript
- [x] Add and configure Prettier
- [x] Add and configure ESLint
- [x] Add and configure Compodoc
- [x] Ignore configuration files in compodoc
- [x] Add and configure Husky
- [x] Add and configure CommitLint

## Step-by-step creation

`mkdir bootstrap-ts-lib`

`cd bootstrap-ts-lib`

`git init`

`npm init -y`

`touch .gitignore`

`touch README.md`

`touch LICENSE`

`touch .prettierrc`

`touch .prettierignore`

`mkdir .vscode`

`cd .vscode`

`touch extensions.json`

`touch settings.json`

`npm i typescript -D`

`npm i @tsconfig/node-lts -D`

`touch tsconfig.json`

`npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D`

`touch .eslintrc.json`

`touch .eslintignore`

`npm i prettier eslint-config-prettier eslint-plugin-prettier -D`

`npm i @types/node -D`

`npm i jest -D`

`npm i @types/jest -D`

`npm i ts-jest -D`

`npm i eslint-plugin-jest -D`

`touch jest.config.ts`

`npm i ts-node -D`

`npm i @compodoc/compodoc -D`

`touch compodoc.json`

`npm i husky -D`

`npx husky install`

`npm i @commitlint/{config-conventional,cli} -D`

`touch commitlint.config.js`

`npm i lint-staged -D`

`npx husky init`

`echo 'npx --no-install commitlint --edit "$1"' > .husky/commit-msg`

`echo 'npx --no-install lint-staged && npm test' > .husky/pre-commit`
