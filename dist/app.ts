import {bootstrap} from 'angular2/platform/browser';
import {ShoppingWebApp} from './app/shopping-web';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(ShoppingWebApp, [
  ROUTER_PROVIDERS
]);
