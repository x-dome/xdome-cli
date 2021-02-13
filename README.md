# xdome

This npm module helps you to bootstrap a NodeJS + ExpressJS API-rest microservice.
You can also use it to plug-in several components that add typical backend functionality, such as: 

- adding new API-rest access points


# Installation

For unix-based OS:


**Clone this repository:**

```
git clone <<GIT_URL>>
```

**Enter the to the project folder and COPY the path reference to the file "run.js", like this:**

"/PATH/TO/RUN/FILE/run.js" 

**Navigate to the path where you want to create your application project.**

**Type the *create* command to create the project:**

``` 
node "/PATH/TO/RUN/FILE/run.js" create <<PROJECT_NAME>>
```

Result will be printed in terminal.


**Then you can try the *add* command to add a new REST Module to your application:**

```
node "/PATH/TO/RUN/FILE/run.js" add accesspoint --name <<ACCESSPOINT_NAME>> --verbs GET POST PUT DELETE --route <<ROUTE_NAME>>
```

Result will be printed in terminal.

**After that you can start your using your application**

Start the server.

```
node .
```



