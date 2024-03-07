import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
	selector: 'app-dynamic-tabs',
	standalone: true,
	imports: [TabMenuModule, RouterOutlet],
	templateUrl: './dynamic-tabs.component.html',
	styleUrl: './dynamic-tabs.component.scss'
})
export class DynamicTabsComponent implements OnInit {
	@Input() items: MenuItem[] | undefined;

	activeItem: MenuItem | undefined;

	ngOnInit(): void {
		if (!this.items) {
			console.error('No se definieron los items');
			return;
		}
		this.activeItem = this.items[0];
	}
}
