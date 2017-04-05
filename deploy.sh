echo "Starting deployment..."

cd /var/www/elektrum_yii
git pull
composer install
npm install
npm run build
chmod 777 prelive_protected/runtime
