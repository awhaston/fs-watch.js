# FS-Watch.js

A simple filesystem watcher that reloads your HTML patch if a file recursively in a chosen path changes via websockets

Very simple to read, understand, and extend.

Meant for static or SSR websites

## Requirements

- Node.js 19.1

## Instructions

- Clone the repo
```
git clone https://github.com/awhaston/fs-watch.js
```
- Copy files into your project
- Include the `fs-watch-client.js` in your static HTML bundle
- Run server using node
```
node fs-watch-server.mjs
```

## Variables

### Server
DIR -  Change to watch a different directory, (Like a build directory), currently defaults to the directory the server is running in. default = "./"
PORT - Port that the server runs on. default = 3434
DEBUG - Set to log each file that changes. default = false
