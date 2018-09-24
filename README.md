# Ocular Web App Portfolio
### Instructions for use
This repository has dependencies listed in a package.json file for NPM.
Upon cloning / downloading this repository, you will need to run npm install in both the node/ and react/ folders to download their dependencies.

Alongside the dependencies in the package.json, some globals will be needed to run the servers:
- react-cli
- nodemom

Both of the above must be installed globally using NPM's install -global option.

Both servers must be running at the same time for the application to work. The back-end node server is hosted on port 4000 while the front-end React server is hosted on port 3000.

If running the app on a Vagrant server, you will need to create a .env file inside the react/ folder.
Inside said .env file you will need these lines:
```
CHOKIDAR_USEPOLLING=true
HOST=:IP
```
Where :IP is the IP address of the Vagrant server i.e. 192.168.33.10

While development is in progress, the instructions below will need to be followed, as certain files are not currently setup.

You will aloso need to put google map API key in a .env.local.examples inside react / folder to see google map of Ocular

```
REACT_APP_WEATHER_API_KEY= "YOUR_API_KEY_GOES_HERE"
```

### Development
All dependencies, including dev dependencies must be installed during development via npm from both package.json files in the node/ and react/ folders.

Aside from the dependencies in the package.json some globals will need to be installed on the machine:
- ruby
- ruby-sass
- grunt-cli

Bear in mind the above globals are only required for development, relating to the compiling of files, you will still need to follow the Instructions for Use section. Only the grunt-cli is able to be installed using npm install -global. Ruby and ruby-sass will need to be installed from the official website.

On first setup of the filesystem, you will need to run `grunt loadcss` within the react/ folder to load the CSS
