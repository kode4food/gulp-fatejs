"use strict";

const through = require('through2');

const fatec = require('fatejs/dist/compiler');
const fatecli = require('fatejs/dist/cli/Compiler');

const pluginName = "gulp-fatejs";

module.exports = function compiler() {

  return through.obj(function(file, encoding, callback) {
    if ( file.isBuffer() ) {
      processString(file.contents.toString());
      return;
    }

    if ( file.isStream() ) {
      processStream(file.contents);
      return;
    }

    callback(null, file);

    function processStream(stream) {
      let str = '';
      file.contents.on('data', (data) => { str += data.toString(); });
      file.contents.on('end', () => { processString(str); });
    }

    function processString(str) {
      try {
        let script = fatec.compileModule(str).scriptBody;
        let nodeModule = fatecli.generateNodeModule(script);
        file.contents = new Buffer(nodeModule);
        callback(null, file);
      }
      catch ( err ) {
        callback(err);
      }
    }
  });

};
