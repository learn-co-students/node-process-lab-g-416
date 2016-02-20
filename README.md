# Access Global and Process Variables Lab

In this lab, you'll need to demonstrate how to access `global` and `process` variables.

## Objectives

1. Write a script that accesses global object
1. Add logic to access process info
1. Save and run the scripts

## Introduction

You are a DevOps engineer and you're tasked with deploying a Node.js API server. Developers worked months on this app and now team needs your expertise to push the app to production.

The server needs to be "smart" enough to get secret values from whatever OS or environment it on. In other words, this lab will test you how good you know and utilize process information. For example, `global` have other global objects like `process`, while `global.process` or just `process` have system information. 

## Instructions

1. Create a script `version.js` which returns the current node version. Export with `module.exports = function(){...}`
2. Create a script `envvar.js` which returns `NODE_ENV` environment variable. Export with `module.exports = function(){...}`
3. Create a script `platform.js` which returns the platform name on which you are running it. Export with `module.exports = function(){...}`
4. Run `npm test` to verify your 3 solutions


### Extra Info

* [Process official documentation](https://nodejs.org/api/process.html)