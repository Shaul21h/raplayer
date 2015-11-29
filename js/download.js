var fs = require('fs');
var youtube = require('youtube-dl');

var storage = require('./storage.js');


module.exports = function(url, cb){

  if(!url){
    window.alert("Invalid URL");
  }



  youtube.getInfo(url, function(err, meta) {
    if (err) throw err;

    // console.log('id:', info.id);
    // console.log('title:', info.title);
    // console.log('url:', info.url);
    // console.log('thumbnail:', info.thumbnail);
    // console.log('description:', info.description);
    // console.log('filename:', info._filename);
    // console.log('format id:', info.format_id);


    var video = youtube(url,
      // Optional arguments passed to youtube-dl.
      ['--format=18'],
      // Additional options can be given for calling `child_process.execFile()`.
      { cwd: __dirname });




      if(cb)
        video.on('info', function(info){

          var _details = "";

          if(storage['videos']){
            var _videos = storage['videos'];
            _details = JSON.parse(_videos);
            _details.push({

              title: meta.title,
              path: global.root + '/media',
              size: info.size

            });

          }
          else {
            var _details = [{
                          title: meta.title,
                          path: global.root + '/media',
                          size: info.size
                        }];

          }

          storage['videos'] = JSON.stringify(_details);
          cb(info)
        });

      video.pipe(fs.createWriteStream( global.root + '/media/' + meta.title + '.mp4'));

  });

};
