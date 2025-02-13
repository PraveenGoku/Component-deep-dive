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
	currentStatus: 'online' | 'offline' | 'unknown' = 'online';

	constructor(){
		setInterval(()=>{
			const rnd = Math.random();
			if(rnd < 0.5){
				this.currentStatus = 'online';
			} else if(rnd<0.9){
				this.currentStatus = 'offline';
			}
			else {
				this.currentStatus = 'unknown';
			}
		},3000);
	}
	// stringArray: string[] = ['value 1', 'value 2', 'value 3'];
	online: string[] = ['Servers are online','All systems are operational.']
	offline: string[] = ['Servers are offline','Functionality should be restored soon.']
	unknown: string[] = ['Server status is unknown','Fetching server status failed.']
}
