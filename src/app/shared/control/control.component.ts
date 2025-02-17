import { afterNextRender, afterRender, Component, ContentChild, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

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

	//This can get hold of elements inside ngContent.
	@ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>;

	constructor(){
		afterRender(()=>{
			//Executes after every render in the whole application for any changes
			console.log('afterRender');
		});

		afterNextRender(()=>{
			//Executes only for the next render in the whole application
			console.log('afterNextRender');
		})
	}
 
	onClick1(){
		console.log('Clicked1!');
		console.log(this.control);
	}
}
