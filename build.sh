git stash --all
git stash clear
gh repo sync
chmod +x build.sh
npm i --legacy-peer-deps
npm run build