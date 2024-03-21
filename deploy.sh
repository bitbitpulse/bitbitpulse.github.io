# deploy.sh
git init
git add --all
git commit -m "deploy"
git push -f git@github.com:bitbitpulse/bitbitpulse.github.io.git main

cmd /k dir