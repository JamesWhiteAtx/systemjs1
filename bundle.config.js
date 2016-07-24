(function(global) {
  
  var map = {
    app: 'app',
    bil1: 'libs/lib1',
    bil2: 'libs/lib2',
    
    rxjs: 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',

    '@angular': 'node_modules/@angular'
    
    //typescript: 'node_modules/typescript/lib/typescript.js'
  };

  var packages = {
    rxjs: {
      defaultExtension: 'js' 
    },
    'symbol-observable': { defaultExtension: 'js', main: 'index.js'},
    app: {
      main: 'main.ts',
      defaultExtension: 'ts'
    }, 
    bil1: {
      defaultExtension: 'ts'
    },
    bil2: {
      defaultExtension: 'ts'
    }
  };
  
  [ 'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic'
  ].forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });

  System.config({
    defaultJSExtensions: true,
    map: map,
    packages: packages
  });

})(this);