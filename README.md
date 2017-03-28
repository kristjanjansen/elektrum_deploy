## Elektrum deployment 

1\. SSH to the provisioned target machine

2\.Run

```sh
cd /var/www
git clone https://github.com/kristjanjansen/elektrum_deploy
cd elektrum_deploy
npm install -g pm2
npm install
pm2 start deploy.js
pm2 startup
```

3\. Open **Settings > Webhooks > Add webhook** in Github project and and fill the following:

Payload URL

    http://your-site-ip/webhook

Content type

    application/json

Secret

    secret

4\. Push something to your project master branch and then run

```sh
pm2 logs
```

to see if the automatic deployment is running correctly.

Other useful PM2 process manager commands can be found here: https://github.com/Unitech/pm2

