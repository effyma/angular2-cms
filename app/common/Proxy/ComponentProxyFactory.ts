import {Component,provide,ElementRef,DynamicComponentLoader,Injector} from 'angular2/core';

export class ComponentProvider {
  path:string;
  provide:{(module:any):any};
}

const PROXY_CLASSNAME = 'component-wrapper';
const PROXY_SELECTOR = `.${PROXY_CLASSNAME}`;

export function componentProxyFactory(provider: ComponentProvider) {
  @Component({
    selector: 'component-proxy',
    providers: [provide(ComponentProvider, { useValue: provider })],
    template: `<span #content></span>`
  })
  class VirtualComponent {
    constructor(
      el: ElementRef,
      loader:DynamicComponentLoader,
      inj:Injector,
      provider:ComponentProvider) {
        System.import(provider.path)
        .then(m => {
          loader.loadIntoLocation(provider.provide(m), el, 'content');
        });
      }
  }
  return VirtualComponent;
}