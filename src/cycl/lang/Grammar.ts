var fs = require('fs');
var ohm = require('ohm-js');
var contents = fs.readFileSync('./src/cycl/lang/Cycl.ohm');
var Grammar = ohm.grammar(contents);
export default Grammar;