import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class CatalogService {

  constructor() {
    /*const DISCOVERY_SERVERS = [
      'http://46.101.251.23:8500',
    ];

    this.client = agent.client({
      discovery: 'consul',
      discoveryServers: DISCOVERY_SERVERS,
      discoveryStrategy: 'randomly',
      serviceName: 'shopping-web',
      serviceStrategy: 'randomly'
    });*/

  }

  getAll() {
    return{
      products: [{
        productId: 'abc',
        title: 'Foobar',
        price: 12.56
      }, {
        productId: 'xyz',
        title: 'Foobaz',
        price: 7.99
      }]
    }
  }


  setCart(cart) {
    //send post request
  }




}
