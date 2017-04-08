/* eslint-disable*/
/**
 *  生成preload img list
 */

var fs = require('fs');
var path = require('path');
var ret = [];
var limit = 10000;
var prefix = './static/img/';
var img_reg =/png|jpg/;
var img_except = ['scene-1-bg.png', 'scene-1-circle.png', 'scene-5-bg.jpg', 'tower-light.png'];
var img_path = path.join(__dirname, 'src/assets');
var target_path = path.join(__dirname, 'src/js/data.js');

fs.readdir(img_path, function (err, files) {
  if (err) {
    return;
  }
  if (!files.length) {
    return console.log('empty');
  }
  for (var index = 0; index < files.length; index++) {
    var element = files[index];

    if (img_reg.test(element) && img_except.indexOf(element) === -1) {
      var state = getFileSize(element);
      if (state.size > limit) {
        ret.push(prefix + element);
      }
    }
  }
  write(ret);
});
function getFileSize (file) {
  var state = fs.statSync(img_path + '/' + file);
  return state
}
function write (files) {
  fs.writeFile(target_path, "export default '" + files.join(',') + "'\n", function (err) {
    if (err) {
      return ;
    }
  });
}
