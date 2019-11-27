#!/bin/bash

cd /home/forge/t4.crud.co.za/reactapp

npm run build

rm -r ../public/static
cp -r build/static ../public/static
cp -f build/index.html ../resources/views/backend/index.blade.php
