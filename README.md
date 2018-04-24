# Prerequisites

## Create a Package

Let's first initialize a package with npm. This will help to manage our application's dependencies.

```bash
> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (part1) express-app
version: (1.0.0) 
description: 
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/haran/Workspace/dev-mission-express-app/part1/package.json:

{
  "name": "express-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes)
```

This should have generated a `package.json` file for us.

```bash
> ls 
package.json
```

## Install Express

Install express, our app's first dependency. We'll use npm to install the dependency and "save" it to our `package.json` file.

```bash
> npm install --save express
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN part1@1.0.0 No description
npm WARN part1@1.0.0 No repository field.

+ express@4.16.2
added 49 packages in 1.78s
```

```bash
> cat package.json
{
  "name": "part1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.2"
  }
}
```
