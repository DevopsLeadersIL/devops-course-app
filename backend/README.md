# devops-course-app

```bash
#Building frontend
  docker build --tag devops-course-backend:latest .
```


```bash
#Running frontend
  docker run -d -p 3000:3000 devops-course-backend:latest
```