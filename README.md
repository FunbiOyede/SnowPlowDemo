# SnowPlowDemo
 Solution to technical assignment

### Overview

This Nodejs api is based on a web service that process bookings for hotels. The api uses snowplow to track user acitivties and also server uptime. The events that are tracked are being sent to snowplow micro to validate that the tracking implemented in the api is working the right way during the testing phase, this project also makes use of redis as a primary data store.

### Requirements

- [Nodejs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Redis](https://redis.io/)

### Installation

- Clone this repository
```
 git clone https://github.com/FunbiOyede/SnowPlowDemo.git
```
- Navigate into the [cloned] project directory.

```
cd SnowPlowDemo
```
- Install dependencies

```
 npm install
```

- Starting Snowplow Micro

```
 -  cd micro-config folder
 -  docker-compose up
 -  Access snowplow micro collector endpoint at localhost:9090/micro/all

```

- Start Api Server:

```
 # Navigate back into the main directory
 # Execute
 - npm run dev
 -  Access server at localhost:3000
```

 - Api Endpoints

 ```
    - Server Status(GET) /status
    - Create booking(POST)  /booking
    - Get all bookings(GET)  /bookings
    - Cancel bookings(DELETE)  /cancel/booking
```




- Run tests
```
# Execute 
npm run test
```



### Conclusion 
 Hire me 😀
