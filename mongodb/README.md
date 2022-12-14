# devops-course-app

```bash
#Building mongodb
  docker build --tag devops-course-mongo:latest .
```


```bash
#Running mongodb
  docker run --name devops-course-mongo -p 27017:27017  -d devops-course-mongo:latest
```