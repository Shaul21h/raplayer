var chokidar = require('chokidar');
module.exports = function(){

  var watcher  = chokidar.watch('.', {ignored: /media/});

  watcher.add('./css/*.css');
  watcher.add('./templates/*.jade');
  watcher.on('all', function(event, path) {
    if (window.location && event == "change")
      window.location.reload();
  });
}
