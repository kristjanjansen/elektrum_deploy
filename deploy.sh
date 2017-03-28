echo "Starting deployment..."

cd /var/www/elektrum_frontend
git pull
npm install
npm run build
# composer install
