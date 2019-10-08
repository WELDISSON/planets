# Planet
## prerequisites:
- Nodejs
- npmjs

---
## write .env:
- options:
  ```
    DB_HOST 
    DB_PORT
    DB_USER
    DB_PASS
    APP_PORT
  ```
## install:
```
$ npm i
```

---
## Running dev: 
```
$ npm run dev
```

---
## Running prod: 
```
$ npm start
```

---
## Running test: 
```
$ npm t
```

---
## Usage:
### Create a planet
```
    POST http://localhost:{APP_PORT}/api/planets
     body = {
                name: PlanetName, 
                climate: PlanetClimate, 
                terrain: PlanetTerrain
            }

```
- PlanetName can be found at : https://swapi.co/api/planets/
---
### Get all planets
```
    GET http://localhost:{APP_PORT}/api/planets
    params: page
    exemple: http://localhost:{APP_PORT}/api/planets?page=2
```

---
### Get by ID
```
    GET http://localhost:{APP_PORT}/api/planets/{planetId}
```

---
### Get by name
```
    GET http://localhost:{APP_PORT}/api/planets/name/{planetName}
```

---
### Remove Planet by ID
```
    DELETE http://localhost:{APP_PORT}/api/planets/{planetId}
```

---
#### Support: 
- Weldisson Araujo
- email: weldisson.araujo@gmail.com

---
