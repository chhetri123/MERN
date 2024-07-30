# project setup

-- npm init
-- fill all the question and hit enter

# install all the dependencies

-- npm install express mongose multer socker.io bcryptjs sharp dotenv ( installing in dependency )
-- npm install -D nodemon ( installing in dev dependency )

```
{
    "name": "assign-one", ( PROJECT NAME )
    "version": "1.0.0", ( PROJECT VERSION )
    "description": "", ( PROJECT DESCRIPTION )
    "main": "app.js", ( PROJECT ENTRYPOINT )
    "scripts": {
    //PROJECT RUN, TEST, DEPLOY YAHA LEKHCHAU
    "start":"node app.js",
    "dev":"nodemon app.js"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    "bcryptjs": "^2.4.3",
    "mongoose": "^8.5.1",
    "multer": "^1.4.5-lts.1",
    "sharp": "^0.33.4",
    "socket.io": "^4.7.5"
    }
}

```

# Adding type to module to user new import and export instead of require and exports

```
"type": "module",
```
