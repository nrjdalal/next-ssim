#!/bin/sh

cat >org.sh <<GIT
#!/bin/sh
mkdir -p ~/public_html
cd ~/public_html
git init
git pull https://github.com/nrjdalal/ns-ssim
exit
GIT

ssh ssimdwarka "bash -s" <org.sh
rm org.sh
