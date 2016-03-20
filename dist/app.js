System.register(['angular2/platform/browser', './app/shopping-web', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, shopping_web_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (shopping_web_1_1) {
                shopping_web_1 = shopping_web_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(shopping_web_1.ShoppingWebApp, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=../../app.js.map