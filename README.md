# devops-course-app

## Welcome to the DevOps Leaders IL - Course Application repository.
This Application will simulate a student list. It has a web UI to display/delete/add students and courses.
The Application is built from 3 services:
FrontEnd - located under /frontend - ReactJS web application.
Backend API - located under /backend - NodeJS Express server
MongoDB - an external Document DB that we use to store our data

### Running the Application:

1. First of all, you need to run the DB. You can do this in a few ways:
   Downloading, installing and running MongoDB as a service on your computer
   Running it using Docker (given that you have Docker installed)

```bash
#Running mongodb
  docker run --name example-mongo -p 27017:27017  -d mongo
```

2.  Run the Backend this:
    For this, you will need to install NodeJS
    Run the following command
    ```bash
    ./backend
    npm start
    ```
3.  Run the FrontEnd:
    For this, you will need to install NodeJS
    Run the following command
    ```bash
     ./frontend
    npm start
    //type "y" when asked to run on another port
    ```
