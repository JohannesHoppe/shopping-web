import {bootstrap} from 'angular2/platform/browser';
import {ShoppingWebApp} from './app/shopping-web';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';

bootstrap(ShoppingWebApp, [
  ROUTER_PROVIDERS,
  provide(Window, {useValue: window})
]);
