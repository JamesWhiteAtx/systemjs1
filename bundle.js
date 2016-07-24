var Builder = require('systemjs-builder');
var builder = new Builder();
builder.loadConfig('./bundle.config.js')
.then(function() {
  console.log('ready bundle');

//app/**/* - [app/**/*] - [rxjs/**/*]
//app/**/* - [app/**/*]
//test.js
  builder
  .bundle('@angular/http - [rxjs/**/*] - [symbol-observable/**/*]', 'dist/vendor/lib.js')
  .then(function(output) {
    console.log('Build complete', output.modules);
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });

  // Promise.all([builder.trace('@angular/common'),  builder.trace('@angular/common')])
  // .then(function(trees) {
  //   console.log('trees', trees);
  // }).catch(function(reason) {console.log(reason);}) ;  
  
});



