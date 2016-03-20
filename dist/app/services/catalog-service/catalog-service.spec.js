System.register(['angular2/testing', './catalog-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, catalog_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (catalog_service_1_1) {
                catalog_service_1 = catalog_service_1_1;
            }],
        execute: function() {
            testing_1.describe('CatalogService Service', function () {
                testing_1.beforeEachProviders(function () { return [catalog_service_1.CatalogService]; });
                testing_1.it('should ...', testing_1.inject([catalog_service_1.CatalogService], function (service) {
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/services/catalog-service/catalog-service.spec.js.map