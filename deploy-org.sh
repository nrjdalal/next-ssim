#!/bin/sh

cat >org.sh <<GIT
#!/bin/sh
mkdir -p ~/public_html
cd ~/public_html
rm -rf *
rm -rf .*
git init
git pull https://github.com/marshalcode/ns-ssim.git
exit
GIT

ssh ssimdwarka "bash -s" <org.sh
rm org.sh
