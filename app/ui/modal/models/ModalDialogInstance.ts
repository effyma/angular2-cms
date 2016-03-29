import { ComponentRef } from 'angular2/core';
import {PromiseWrapper} from 'angular2/src/facade/async';

export class ModalDialogInstance{
    contentRef : ComponentRef;
    // _bootstrapRef : ComponentRef;
    _resultDefered: any;
	constructor(){
		this._resultDefered = PromiseWrapper.completer();
	}

    // set bootstrapRef(value:ComponentRef){
    //     this._bootstrapRef = value;
    // }

	get result(){
        return this._resultDefered.promise;
    }
    
    /**
     *  Close the modal with a return value, i.e: result.
     */
	close(result){
		if(result === void 0){result = null;}
        if ( this.contentRef.instance.beforeClose &&
        this.contentRef.instance.beforeClose() === true ) return;
        this.dispose();
        this._resultDefered.resolve(result);
    }

    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
	dismiss(){
        if (this.contentRef.instance.beforeDismiss && this.contentRef.instance.beforeDismiss() === true ) return;
        this.dispose();
        this._resultDefered.reject();
    }

    dispose(){
        // this._bootstrapRef.dispose();
        this.contentRef.dispose();
    }
}