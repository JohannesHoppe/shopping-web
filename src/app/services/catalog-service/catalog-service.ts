import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

// we know that its already loaded...
this['System']
  .import('node_modules/multiagent/lib/browser')
  .then(browser => this.browser = browser);

@Injectable()
export class CatalogService {

  constructor() {
    console.log(browser);
  }

}
