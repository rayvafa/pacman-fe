# fe-co-pacman-fe

**TODO**: [Setup project in CircleCI](https://github.com/domain-group/fe-docs/blob/master/developer_docs/adding_a_repository_to_circleci.md).

**Status**

[![Circle CI](https://circleci.com/gh/domain-group/fe-co-pacman-fe.svg?style=shield&circle-token=<TODO>)](https://circleci.com/gh/domain-group/fe-co-pacman-fe)

## Summary
__ FE for Pacman project

## Features

## Usage

```javascript
import PacmanFe from '@domain-group/fe-co-pacman-fe';
import React from 'react';
import ReactDom from 'react-dom';

ReactDOM.render(
  <PacmanFe/>,
  document.querySelector('.fe-co-pacman-fe-entry-point')
);
```

#### Props
Prop | Type | Default | Description | Required
---- | ---- | ------- | ----------- | --------
... | ... | ... | ... | ... 

## Installation

### npm

```bash
npm install --save @domain-group/fe-co-pacman-fe
```

### Local Install

For example, if you want to hack on some changes then install locally:

```bash
git clone git@github.com:domain-group/fe-co-pacman-fe.git
cd fe-co-pacman-fe
# make some changes
npm run build # important that you rebuild after each change
```

Then in your codebase;

```bash
npm install ../path/to/fe-co-pacman-fe
```

The component is now available for import:

```javascript
import PacmanFe from '@domain-group/fe-co-pacman-fe';
```

## Building

* **`npm run test`**: Execute the test suite inside the `test/` folder
* **`npm run lint`**: Lint JS & SASS
* **`npm run build:local`**: Build `src/` & output to `serve/` for local testing
* **`npm run build:bundle`**: Bundle `src/` & output to `dist/` for production sharing
* **`npm run build:module`**: Build `src/` & output to `lib/` for use as npm module
* **`npm run watch`**: Incrementally run `npm run build` on file changes
* **`npm start`**: Synonym for `npm run watch`
* **`npm run prepublish`**: Synonym for `npm run dist:build` executed on publish
