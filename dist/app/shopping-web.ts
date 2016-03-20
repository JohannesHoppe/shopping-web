import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {CatalogService} from './services/catalog-service/catalog-service';


@Component({
  selector: 'shopping-web-app',
  providers: [CatalogService],
  templateUrl: 'app/shopping-web.html',
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  pipes: []
})
@RouteConfig([

])
export class ShoppingWebApp {
  products:any;
  cart:any = {products:[]}
  client:any;


  constructor(private catalog: CatalogService){
      this.catalog.getAll().then(res => this.products = res.body.products);
  }

  addToCart(id:string){

    var p = this.cart.products.find(e => e.productId == id);

    //if product is not in cart
    if(!p){
      var newp = this.products.products.find(e => e.productId == id);
      newp.quantity = 1;

      this.cart.products.push(newp);

    }else{ //if product is already in cart
      p.quantity++;

    }

    this.catalog.setCart(this.cart).then(res => this.cart = JSON.parse(res.text));

  }



}
