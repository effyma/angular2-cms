import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {RouterOutlet,Router,ComponentInstruction} from 'angular2/router';

@Directive({
    selector: 'router-outlet'
})

export class LoggedInRouterOutlet extends RouterOutlet{
    publicRoutes;
    parentRouter;
    constructor(_elementRef:ElementRef, _loader:DynamicComponentLoader,_parentRouter:Router,@Attribute('name')nameAttr){
    super(_elementRef,_loader,_parentRouter,nameAttr);
    this.parentRouter = _parentRouter;
    this.publicRoutes = {
        'login':true
    }
    }
    activate(instruction:ComponentInstruction){
        let url = instruction.urlPath;
        if(!this.publicRoutes){
            this.parentRouter.navigateByUrl('/login');            
        }
        return super.activate(instruction);
    }
}
