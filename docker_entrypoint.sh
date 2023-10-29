#!/bin/sh
cd themes/doit
# Check if there is something to be installed
npm list
if [ $? -eq 1 ]; then
    npm install
    npm run build
fi
cd ../..
# Run HUGO
hugo server --bind 0.0.0.0