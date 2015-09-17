
# stream-hash

  A transform stream that calls back with a hash.

  [![build status](https://secure.travis-ci.org/juliangruber/stream-hash.svg)](http://travis-ci.org/juliangruber/stream-hash)

## Example

```js
var Hash = require('stream-hash');
var fs = require('fs');

fs.createReadStream(__dirname + '/index.js')

.pipe(Hash({ algorithm: 'sha1', encoding: 'hex' }, function(hash){
  console.log('hash', hash);
}))

.pipe(fs.createWriteStream('/tmp/nope'));
```

## Installation

```bash
$ npm install stream-hash
```

## License

  MIT

