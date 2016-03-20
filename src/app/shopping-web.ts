import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CatalogService} from './services/catalog-service/catalog-service';

@Component({
  selector: 'shopping-web-app',
  providers: [CatalogService],
  templateUrl: 'app/shopping-web.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

])
export class ShoppingWebApp {

  constructor(catalogService: CatalogService) {

    console.log(CatalogService);
  }
}
