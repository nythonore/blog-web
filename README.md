# Blog Posts

This repository contains code for Blog Posts in React & Redux TypeScript and Bootstrap.\
view demo: https://whatsapp.nythonore.me

![alt text](https://nythonore.me/work/whatsapp.png)

### Prerequisites

Make sure you have already installed Docker Engine. You don’t need to install Nginx or YARN, as both are provided by Docker images.

```
$ docker -v
Docker version 20.10.7, build f0df350
```

### Installing

```
$ git clone https://github.com/nythonore/mlabs-blog.git
```

```
$ cd mlabs-blog
```

```
$ docker-compose -f docker-compose.prod.yml build
```

```
$ docker run -p 3000:80 --name mlabs-web mlabs-web
```

Go to [http://localhost:3000](http://localhost:3000)

### Built With

- [React TypeScript](https://www.typescriptlang.org/) - Front-end Framework
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [React Bootstrap](https://react-bootstrap.github.io/) - CSS Framework
- [Nginx](https://nginx.org/en/) - Web Server
- [Docker](https://www.docker.com/) - Containerization

### Author

**Honore Niyitegeka** (https://nythonore.me)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
