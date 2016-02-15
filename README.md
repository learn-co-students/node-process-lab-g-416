# Access Global and Process Variables Lab

In this lab, you'll need to demonstrate how to access `global` and `process` variables.

## Objectives

1. Write a script that accesses global object
2. Add logic to access process info
3. Save and run the scripts

## Introduction

`global` have other global objects like `process`, while `global.process` or just `process` have system information.

## Instructions

1. Create a script version.js which returns the current node version. Export with `module.exports = function(){...}`
2. Create a script `envvar.js` which returns `NODE_ENV` environment variable. Export with `module.exports = function(){...}`
3. Create a script `platform.js` which returns the platform name on which you are running it. Export with `module.exports = function(){...}`
4. Run `$ npm test` to verify your 3 solutions



### Extra Info

* [Process official documentation](https://nodejs.org/api/process.html)