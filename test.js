var Hash = require('./');
var test = require('tap').test;
var PassThrough = require('stream').PassThrough;
var Writable = require('stream').Writable;

test('simple', function(t){
  t.plan(3);

  var r = PassThrough();
  r.end('hey');

  var w = Writable();
  w._write = function(c, _, fn){
    t.equal(c.toString(), 'hey');
    fn();
  };

  w.on('finish', function(){
    t.ok(true);
  });

  var h = Hash({ algorithm: 'sha1', encoding: 'hex' }, function(hash){
    t.equal(hash, '7f550a9f4c44173a37664d938f1355f0f92a47a7');
  });

  r.pipe(h).pipe(w);
});
