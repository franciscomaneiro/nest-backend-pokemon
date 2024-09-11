## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Migrations run

```bash
# You will need cross-var for create migrations
$ npm install cross-var -g
```

```bash
# Leave the name for the migration at the end of the command
$ npm run migration:create

# Run migration 
$ npm run migration

# Remove the migration with the fallback option
$ npm run migration:down
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
