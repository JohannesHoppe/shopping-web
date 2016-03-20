import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {ShoppingWebApp} from '../app/shopping-web';

beforeEachProviders(() => [ShoppingWebApp]);

describe('App: ShoppingWeb', () => {
  it('should have the `defaultMeaning` as 42', inject([ShoppingWebApp], (app: ShoppingWebApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([ShoppingWebApp], (app: ShoppingWebApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

