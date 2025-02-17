import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    imports: [ButtonComponent, ControlComponent,FormsModule],
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit,OnInit{
    @ViewChild('form') form?:ElementRef<HTMLFormElement>;

    @Output() add= new EventEmitter<{title:string; text:string}>();
    ngOnInit(){
        console.log('ONINIT');
        console.log(this.form?.nativeElement);  //not works, not initialized yet
    }

    ngAfterViewInit() {
        console.log('AFTER VIEW INIT');     
        console.log(this.form?.nativeElement);   //works
    }

	submit = 'Submit';
    onSubmit(title:string,ticketText:string){
        this.add.emit({title:title,text:ticketText});
        console.log(title);
        console.log(ticketText);
        this.form?.nativeElement.reset();
    }
}
