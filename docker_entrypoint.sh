#!/bin/sh
# see https://github.com/hugo-toha/toha
hugo mod npm pack
npm install
hugo server -w --bind 0.0.0.0
