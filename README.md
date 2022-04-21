# Typescript Skeleton

![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

This repository means to be a starting point for any typescript project. It contains the essentials tools already configured to just start coding. The main branch contains these features working our:

- Typescript configuration.
- Linter and prettier with `eslint` and `prettier` with google configurations with other personal ones.
- Pre-commit with `husky` to check lint and prettier of staged files before committing.
- Tests with `jest`.

Also, it contains some other branches that add optional configurations to this repo:

- `vscode` - Configuration for VSCode
    - Configuration to use prettier as formatter of typescript files and enabling format on save.
    - Run and debug configuration:
        - Attach debugger to running node instance
        - Run debugger with nodemon
        - Run tests for the current editing file

## Install

To install you simply have to run the `npm` install command. This has not been tested with `yarn` but it should work fine:

```bash
npm install
```

Then, if you want to have the pre-commit script configured, you must run the `prepare` script

```bash
npm run prepare
```

Now the repo should work fine.