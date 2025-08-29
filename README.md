
### API RESTful para la gestión de autos en una concesionaria, construida con [NestJS](https://nestjs.com/) y TypeScript.

## Requisitos

- Node.js >= 18
- Yarn >= 1.22

## Comandos principales

### Desarrollo

```bash
yarn start:dev
```

### Producción

```bash
yarn build
yarn start:prod
```

### Ejecutar seeders (carga de datos de ejemplo)

```bash
yarn seed:run
# o
yarn start:dev
# y luego accede al endpoint /seed si está implementado
```

### Formateo y lint

```bash
yarn format
yarn lint
```

### Pruebas

```bash
# Unit tests
yarn test

# End-to-end tests
yarn test:e2e

# Cobertura
yarn test:cov
```

## Estructura del proyecto

- `src/` - Código fuente principal (módulos, controladores, servicios, DTOs)
- `src/cars/` - Módulo de autos
- `src/seed/` - Lógica de seeders (carga de datos)
- `test/` - Pruebas end-to-end

## Ejemplo de uso de la API

### Obtener todos los autos

```http
GET /cars
```

### Crear un auto

```http
POST /cars
Content-Type: application/json
{
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2022
}
```

### Obtener un auto por ID

```http
GET /cars/1
```

## Dependencias principales

- @nestjs/core, @nestjs/common, @nestjs/cli
- class-validator, class-transformer
- typescript
- prettier, eslint

## Notas

- El proyecto está configurado para usar Prettier y ESLint.
- Usa DTOs y validaciones con class-validator.
- Incluye lógica de seed para poblar la base de datos o arrays en memoria.
- Puedes modificar la estructura y los modelos según tus necesidades.

## Autor

- Basado en el curso de NestJS

## Licencia

UNLICENSED
