import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class CatalogService {
  catalogclient:any;
  cartclient:any;


  constructor(window: Window) {
    var agent = window['multiagent'];
    console.log(agent.client);

    const DISCOVERY_SERVERS = [
      'http://46.101.251.23:8500',
    ];

    this.catalogclient = agent.client({
      discovery: 'consul',
      discoveryServers: DISCOVERY_SERVERS,
      discoveryStrategy: 'randomly',
      serviceName: 'catalog-service',
      serviceStrategy: 'randomly'
    });


    this.cartclient = agent.client({
      discovery: 'consul',
      discoveryServers: DISCOVERY_SERVERS,
      discoveryStrategy: 'randomly',
      serviceName: 'cart-service',
      serviceStrategy: 'randomly'
    });

  }

  getAll() {
    return this.catalogclient.get('/products');
  }


  setCart(cart) {
    var endpoint;
    if(cart.cartId){
      endpoint = '/carts/' + cart.cartId;
    }else{
      endpoint = '/carts';
    }

    return this.cartclient.post(endpoint, cart);
  }




}
