var http = require('http')
var exec = require('child_process').exec
var fs = require('fs')
var ip = require('ip');
var webhookHandler = require('github-webhook-handler')

// Set up a server with webhook hander

var handler = webhookHandler({ path: '/webhook', secret: 'secret' })

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404
    })
}).listen(8888)

handler.on('error', function (err) {
    console.error(err.message)
})

// When Github visits our webhook...

handler.on('push', function (push) {
    
    // Deploy only when changes are pushed to master branch

    if (push.payload.ref === 'refs/heads/master') {

        // Execute a deploy shell script

        exec('./deploy.sh', function (error, stdout, stderr) {
            console.log(stdout)
            console.log(stderr)
        });

        // For debugging

        console.log(push.payload.head_commit.url);

    }

})

console.log('Starting a Github webhook: http://' + ip.address() + ':8888/webhook')
