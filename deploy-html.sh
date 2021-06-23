yarn build
gh repo clone https://github.com/nrjdalal/ns-ssim
rm -rf ./ns-ssim/*
cp -r ./out/* ./ns-ssim
cd ./ns-ssim
git add .
git commit -m "$(Date)"
git push
cd ..
rm -rf ./ns-ssim
rm -rf ./out
