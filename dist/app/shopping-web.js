System.register(['angular2/core', 'angular2/common', 'angular2/router', './services/catalog-service/catalog-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, catalog_service_1;
    var ShoppingWebApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (catalog_service_1_1) {
                catalog_service_1 = catalog_service_1_1;
            }],
        execute: function() {
            ShoppingWebApp = (function () {
                function ShoppingWebApp(catalog) {
                    this.cart = { products: [] };
                    this.products = catalog.getAll();
                }
                ShoppingWebApp.prototype.addToCart = function (id) {
                    var p = this.cart.products.find(function (e) { return e.productId == id; });
                    //if product is not in cart
                    if (!p) {
                        var newp = this.products.products.find(function (e) { return e.productId == id; });
                        newp.quantity = 1;
                        this.cart.products.push(newp);
                    }
                    else {
                        p.quantity++;
                    }
                    console.log(this.cart);
                };
                ShoppingWebApp = __decorate([
                    core_1.Component({
                        selector: 'shopping-web-app',
                        providers: [catalog_service_1.CatalogService],
                        templateUrl: 'app/shopping-web.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        pipes: []
                    }),
                    router_1.RouteConfig([]), 
                    __metadata('design:paramtypes', [catalog_service_1.CatalogService])
                ], ShoppingWebApp);
                return ShoppingWebApp;
            }());
            exports_1("ShoppingWebApp", ShoppingWebApp);
        }
    }
});
//# sourceMappingURL=../../../app/shopping-web.js.map