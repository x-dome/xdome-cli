# Node Base Server Installer

This npm library helps you to bootstrap a Nodejs API-rest server.
You can also use it to plug-in to the server several components that add typical backend functionality, such as: 

- database CRUD operations
- VPN connection handling
- adding new API-rest access points
- adding token-based security functionality


# Installation

For unix-based OS:


**Clone the repository:**

```
git clone https://github.com/santidesimone/node-base-installer.git
```

**To install globally (and locally) this npm module, run:**

```
cd node-base-installer
```

```
sudo npm i -g $(pwd)
```

# How to use it

The following commands are now globally exposed for you to use them.

| Command | Description |
| --- | --- |
| `createServer` | git-clones a NodeJS template server in the current directory |
| `addPlugin <PLUGIN_NAME>`     | plugs-in a new component to the project. Must be executed from project's root directory |
| `addPlugin tokenCheck`    | securizes your server with Json Web Token (JWT) |
| `addPlugin accessPoint`    | adds a new access point to your server |
| `addPlugin vpnConn`    | standarices the way you connect to a VPN from your server |
| `addPlugin dbInterface`    | standarices the way you connect to a database from your server |



**Test commands**

Type the *createServer* command and hit enter:
``` 
createServer
```
Result will be printed in terminal.

Type the *addPlugin* command and hit enter:
```
addPlugin 
```
Result will be printed in terminal.

# Uninstalling

```
sudo npm uninstall -g $(pwd)
```

_ToDo: shold be uploaded to npmjs as a public module_
