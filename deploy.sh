echo "Starting deployment..."

cd /var/www/elektrum_yii
git pull
composer install
npm install
npm run build
