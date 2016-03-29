import { Component } from 'angular2/core';
import {ModalDialogInstance} from 'app/ui/modal/models/ModalDialogInstance';


@Component({
	selector:'modal-content',
	styles: [`
	.modal-backdrop.in {
    filter: alpha(opacity=50);
    opacity: .5;
	}
	.modal-backdrop {
	    position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 1040;
	    background-color: #000;
	}`],
	template: `
	<div class="in modal-backdrop" ></div>
	<div class="in modal" role="dialog" style="display: block" tabindex="0">
		<div class="modal-dialog modal-sm">
		<div class="modal-content" style="display: block;">
		<div #modalcontent></div>

		</div>
		</div>
	</div>`,
	providers:[ModalDialogInstance]
})

export class ModalComponent{
	constructor(dialogInstance:ModalDialogInstance){
		this.dialogInstance = dialogInstance;
	}
}