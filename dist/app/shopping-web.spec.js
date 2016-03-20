System.register(['angular2/testing', '../app/shopping-web'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, shopping_web_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (shopping_web_1_1) {
                shopping_web_1 = shopping_web_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [shopping_web_1.ShoppingWebApp]; });
            testing_1.describe('App: ShoppingWeb', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([shopping_web_1.ShoppingWebApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([shopping_web_1.ShoppingWebApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=../../../app/shopping-web.spec.js.map