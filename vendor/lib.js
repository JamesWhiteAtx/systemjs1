System.register("libs/lib1/bean1.ts", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bean1;
    return {
        setters:[],
        execute: function() {
            Bean1 = (function () {
                function Bean1() {
                    this.name = 'Bean1';
                }
                return Bean1;
            }());
            exports_1("Bean1", Bean1);
        }
    }
});

System.register("libs/lib2/pod2.ts", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Pod2;
    return {
        setters:[],
        execute: function() {
            Pod2 = (function () {
                function Pod2() {
                    this.name = 'Pod2';
                }
                return Pod2;
            }());
            exports_1("Pod2", Pod2);
        }
    }
});
