var download = require('./download.js');

function $_utility(){

}

$_utility.prototype.video = download;


module.exports = new $_utility();



// function injectAddButton(){
//
//     console.log('Inserting dom elements')
//   var html = "<div class='overlay-hack'>"+
//   "<a href='javascript:void(0)'>ADD</a>"+
//   "</div>";
//
//   var _source = window.frames["youtube"].document.getElementById('player-api').innerHTML;
//
//   window.frames["youtube"].document.getElementById('player-api').innerHTML = _source + html;
//
//
// }

// function begin_download(){
//   download(window.document.getElementById('url').value, function(info){
//       console.log(info);
//       console.log('Download started');
//       console.log('filename: ' + info.filename);
//       console.log('size: ' + info.size);
//   });
// }
