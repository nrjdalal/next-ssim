#/bin/sh
set -e

read -p "Commit Name - " CNAME

# auto push latest next repository
git add -A
git commit -m "$CNAME"
git pull
git push

# create a nextstatic(ns) build
yarn build

# remove to be cloned repository if exists
rm -rf ./ns-ssim

# clone the latest remote nextstatic(ns) repository
git clone git@github.com:marshalcode/ns-ssim.git

# delete all repo files/folders except .git
rm -rf ./ns-ssim/*
rm -rf ./ns-ssim/.htaccess

# copy newer build to cloned repository
cp -r ./out/* ./ns-ssim
cp -r ./out/.htaccess ./ns-ssim


# change directory to newer repository
cd ./ns-ssim

# push latest build
git add .
git commit -m "$CNAME"
git push

# remove to be cloned repository
cd ..
rm -rf ./ns-ssim

npx kill-port 3000
