### Installation:

1. Pull this project.
2. copy .env.example to .env
3. copy ./docker-compose/.env.example to ./docker-compose/.env
4. Then cd into ./docker-compose and run the following commands:
```
$ sudo docker-compose build
$ sudo docker-compose up -d
$ sudo docker-compose ps // to check that all images are "UP"
```
5. Next run "**sudo docker-compose exec app bash**" to access bash on the php container and,
then run the following commands:
```
$ composer install
$ php artisan key:generate
$ php artisan migrate
$ php artisan db:seed
``` 

6. Then exit bash and then cd out of docker-composer and into reactapp (../reactapp):
For this part you need node installed locally and if you have nvm installed you can run "nvm use",
to run the same version as node as used in production.
Then run the following:
```
$ npm install
$ ./build_and_copy_to_server.sh // will build the React app and copy files to Laravel's public and views directories.
// If you need to work on the React app you can run:
$ npm start // and then open localhost:3000 
```
TODO: When Laravel Airlock is officially released, Move React app to it's own container.

7. Done! Now visit http://localhost:8000 and sign in with email: demo@example.com password: password
