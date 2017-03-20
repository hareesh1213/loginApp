import { Component, ViewContainerRef, ViewEncapsulation, OnInit } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';

@Component({
  selector: 'app-model',
  template: '<span defaultOverlayTarget></span>',
  styleUrls: ['./model.component.css'],
  providers: [Modal]
})
export class ModelComponent implements OnInit 
{

	public showModel;
	constructor(private modal: Modal) { }

  	ngOnInit() {}

	onClick(h, b) 
	{
		this.modal.alert()
			.size('lg')
			.showClose(true)
			.title(h)
			.body(b)
			.open();
	}
}
