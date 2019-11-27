#!/bin/bash

cd /home/forge/t4.crud.co.za
git pull origin master
composer install --no-interaction --prefer-dist --optimize-autoloader
echo "" | sudo -S service php7.3-fpm reload

if [ -f artisan ]
then
    php artisan migrate --force
fi