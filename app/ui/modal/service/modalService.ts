import { Injectable,DynamicComponentLoader,ComponentRef,ElementRef,Injector,provide } from 'angular2/core';
import {ForgetPasswordContent} from 'app/ui/modal/components/ForgetPasswordContent';
import {SignupContent} from 'app/ui/modal/components/SignupContent';
import {ModalComponent} from 'app/ui/modal/components/ModalComponent';
import {ModalDialogInstance} from 'app/ui/modal/models/ModalDialogInstance';

@Injectable()
export class ModalService{
	constructor(componentLoader:DynamicComponentLoader,elementRef: ElementRef){
	this.componentLoader = componentLoader;
	this.modalData = {
		'forgetpw': new ForgetPasswordContent(),
        'signup': new SignupContent()
	}
	}
    open(componentType, elementRef,anchorName) {
        // console.log(bindings)
        console.log(anchorName)
        this.componentType = componentType;
        let dialog = new ModalDialogInstance();
        let dialogBindings = Injector.resolve([ provide(ModalDialogInstance, {useValue: dialog}) ]);
        return this.createModal(elementRef,anchorName,dialogBindings)
            .then( (modalRef:ComponentRef) => {
            	console.log(modalRef)
                dialog.modalRef = modalRef;
                  let modalDataBindings = Injector.resolve([ provide(ModalDialogInstance, {useValue: dialog})]);
                  console.log(modalDataBindings)
                return this.componentLoader.loadIntoLocation(this.componentType,modalRef.location,'modalcontent',modalDataBindings)
                    .then((contentRef:ComponentRef) => {
                        dialog.contentRef = contentRef;
                        return dialog;
                    });
                });
	}

    createModal(elementRef,anchorName,dialogBindings)  : Promise<ComponentRef>{
        this.elementRef = elementRef;
        this.anchorName = anchorName;
        this.dialogBindings = dialogBindings;
        return this.componentLoader.loadIntoLocation(ModalComponent, elementRef,anchorName,dialogBindings);
    }
}