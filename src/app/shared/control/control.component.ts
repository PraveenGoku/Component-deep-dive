import { Component, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-control',
	standalone: true,
	imports: [],
	templateUrl: './control.component.html',
	styleUrl: './control.component.css',
	encapsulation: ViewEncapsulation.None,
	//Angular Prefers this way than Host Binding and Listener
	host:{
		class:'control',
		'(click)':'onClick1()' 
	},
})
export class ControlComponent {
// @HostBinding('class') className = 'control';
// @HostListener('click') onClick(){
// 	console.log('Clicked!');
// }
@Input({required:true}) label!:string;

onClick1(){
	console.log('Clicked1!');
}
}
