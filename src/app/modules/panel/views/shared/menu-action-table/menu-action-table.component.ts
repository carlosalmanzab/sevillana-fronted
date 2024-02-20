import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-menu-action-table',
	standalone: true,
	imports: [ButtonModule],
	templateUrl: './menu-action-table.component.html',
	styleUrl: './menu-action-table.component.css'
})
export class MenuActionTableComponent {}
