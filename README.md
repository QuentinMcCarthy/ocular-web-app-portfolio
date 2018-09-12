# Ocular Web App Portfolio
### Instructions for use
This repository has dependencies listed in a package.json file for NPM.
Upon cloning / downloading this repository, you will need to run npm install in both the node/ and react/ folders to download their dependencies.

Alongside the dependencies in the package.json, some globals will be needed to run the servers:
- react-cli
- nodemom

Both of the above must be installed globally using NPM's install -global option.

### Hosting
Both servers must be running at the same time for the application to work. The back-end node server is hosted on port 4000 while the front-end React server is hosted on port 3000.

If running the app on a Vagrant server, you will need to create a .env file inside the react/ folder.
Inside said .env file you will need these lines:
```
CHOKIDAR_USEPOLLING=true
HOST=:IP
```
Where :IP is the IP address of the Vagrant server i.e. 192.168.33.10
