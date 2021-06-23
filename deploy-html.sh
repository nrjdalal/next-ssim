# create a nextstatic(ns) build
yarn build

# clone the latest remote nextstatic(ns) repository
gh repo clone https://github.com/nrjdalal/ns-ssim

# delete all repo files/folders except .git
rm -rf ./ns-ssim/*

# copy newer build to cloned repository
cp -r ./out/* ./ns-ssim

# change directory to newer repository
cd ./ns-ssim

# push latest build
git add .
git commit -m "$(Date)"
git push

# go back to previous directory
cd ..

# clean all data
rm -rf ./ns-ssim
rm -rf ./out
