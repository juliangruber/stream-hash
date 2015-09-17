var Transform = require('stream').Transform;
var inherits = require('util').inherits;
var crypto = require('crypto');
var assert = require('assert');

module.exports = Hash;
inherits(Hash, Transform);

function Hash(opts, cb){
  if (!(this instanceof Hash)) return new Hash(opts, cb);
  Transform.call(this);

  assert(opts, 'settings required');
  assert(opts.algorithm, '.algorithm required');
  assert(cb, 'callback required');

  this._hash = crypto.createHash(opts.algorithm);
  this._encoding = opts.encoding;
  this._cb = cb;
}

Hash.prototype._transform = function(chunk, _, done){
  this._hash.update(chunk);
  done(null, chunk);
};

Hash.prototype._flush = function(done){
  this._cb(this._hash.digest(this._encoding));
  done();
};

