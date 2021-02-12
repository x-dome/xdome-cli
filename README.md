# xdome

This npm module helps you to bootstrap a NodeJS + ExpressJS API-rest microservice.
You can also use it to plug-in several components that add typical backend functionality, such as: 

- adding new API-rest access points
~~- database CRUD operations~~ (NOT IMPLEMENTED YET)
~~- VPN connection handling~~ (NOT IMPLEMENTED YET)
~~- adding token-based security functionality~~ (NOT IMPLEMENTED YET)


# Installation

For unix-based OS:


**Clone the repository:**

~~Approach 1~~ (UNDER REVISION: Please use Approach 2)

```
git clone https://github.com/santidesimone/node-base-installer.git
```

~~**To install globally (and locally) this npm module, run:**

```
cd xdome-cli
```

```
sudo npm i -g $(pwd)
```

Approach 2

```
git clone https://github.com/santidesimone/node-base-installer.git
```

Enter the folder and execute a direct reference to de file "run.js", like this:

node "/PATH/TO/RUN/FILE/run.js" <<command>>

# How to use it

The following commands are now globally exposed for you to use them.

| Command | Description |
| --- | --- |
| `create` | git-clones a NodeJS template server in the current directory |
| `add <PLUGIN_NAME>`     | plugs-in a new component to the project. Must be executed from project's root directory |
~~| `add tokenCheck`    | securizes your server with Json Web Token (JWT) |
~~| `add accessPoint`    | adds a new access point to your server |
~~| `add vpnConn`    | standarices the way you connect to a VPN from your server |
~~| `add dbInterface`    | standarices the way you connect to a database from your server |



**Test commands**

Type the *create* command and hit enter:
``` 
node "/PATH/TO/RUN/FILE/run.js" create <<PROJECT_NAME>>
```
Result will be printed in terminal.

Type the *add* command and hit enter:
```
node "/PATH/TO/RUN/FILE/run.js" add accesspoint --name <<ACCESSPOINT_NAME>> --verbs GET POST PUT DELETE --route <<ROUTE_NAME>>
```
Result will be printed in terminal.

~~# Uninstalling~~ (Under revision)

```
sudo npm uninstall -g $(pwd)
```

_ToDo: shold be uploaded to npmjs as a public module_
