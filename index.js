const through = require('through2');

const fatec = require('fatejs/dist/compiler/Compiler');
const fatecli = require('fatejs/dist/cli/Compiler');

const pluginName = "gulp-fatejs";

module.exports = function compiler(config) {

  return through.obj(function(file, encoding, callback) {
    if ( file.isNull() ) {
      callback(null, file);
      return;
    }

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
      let compiled = fatec.compileModule(str);
      let nodeModule = fatecli.generateNodeModule(compiled);
      file.contents = new Buffer(nodeModule);
      callback(null, file);
    }
  });

};
