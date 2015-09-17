var Hash = require('./');
var fs = require('fs');

fs.createReadStream(__dirname + '/index.js')
.pipe(Hash({ algorithm: 'sha1', encoding: 'hex' }, function(hash){
  console.log('hash', hash);
}))
.pipe(fs.createWriteStream('/tmp/nope'));
