import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-server-status',
	standalone: true,
	imports: [NgIf],
	templateUrl: './server-status.component.html',
	styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
	currentStatus = 'online';
}
