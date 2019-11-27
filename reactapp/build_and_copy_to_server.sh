#!/bin/bash

. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc

nvm use
npm run build

rm -r ../public/static
cp -r build/static ../public/static
cp -f build/index.html ../resources/views/backend/index.blade.php

echo "\n\nCopied files to Laravel public/static directory"