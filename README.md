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
    POST http://localhost:3000/api/planets
     body {
            name: PlanetName, climate: PlanetClimate, terrain: PlanetTerrain
        }
```

---
### Get all planets
```
    GET http://localhost:3000/api/planets
```

---
### Get by ID
```
    GET http://localhost:3000/api/planets/{planetId}
```

---
### Get by name
```
    GET http://localhost:3000/api/planets/name/{planetName}
```

---
### Remove Planet by ID
```
    DELETE http://localhost:3000/api/planets/{planetId}
```

---
#### Support: 
- Weldisson Araujo
- email: weldisson.araujo@gmail.com

---
