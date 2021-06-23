#/bin/sh
set -e

# auto push latest next repository
git add .
git commit -m "$(date +'%y%m%d-%H%M%S')"
git push

# create a nextstatic(ns) build
yarn build

# remove to be cloned repository if exists
rm -rf ./ns-ssim

# clone the latest remote nextstatic(ns) repository
git clone https://github.com/nrjdalal/ns-ssim

# delete all repo files/folders except .git
rm -rf ./ns-ssim/*

# copy newer build to cloned repository
cp -r ./out/* ./ns-ssim

# change directory to newer repository
cd ./ns-ssim

# push latest build
git add .
git commit -m "$(date +'%y%m%d-%H%M%S')"
git push

# remove to be cloned repository
rm -rf ./ns-ssim
