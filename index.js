var hamlc = require('haml-coffee');
var _     = require('lodash');

hexo.extend.renderer.register('hamlc', 'html', function(data, options) {
  var template = hamlc.compile(data.text, _.extend({filename: data.path}, options));
  return template(this);
}, true);

