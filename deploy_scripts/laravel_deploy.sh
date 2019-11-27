#!/bin/bash

cd /home/forge/t4.crud.co.za
git pull origin master

# Laravel
composer install --no-interaction --prefer-dist --optimize-autoloader
echo "" | sudo -S service php7.3-fpm reload

if [ -f artisan ]
then
    php artisan migrate --force
fi

# React
npm run build
rm -r ../public/static
cp -r build/static ../public/static
cp -f build/index.html ../resources/views/backend/index.blade.php