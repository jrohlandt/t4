#!/bin/bash

#git pull origin master

# Laravel
cd /home/forge/t4.crud.co.za

composer install --no-interaction --prefer-dist --optimize-autoloader
echo "" | sudo -S service php7.3-fpm reload

if [ -f artisan ]
then
    php artisan migrate --force
fi

# React
cd /home/forge/t4.crud.co.za/reactapp

npm install
npm run build
rm -rf ../public/static
cp -r build/static ../public/static
cp -f build/index.html ../resources/views/backend/index.blade.php