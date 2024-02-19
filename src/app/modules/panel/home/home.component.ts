import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { MenuActionTableComponent } from '../views/shared/menu-action-table/menu-action-table.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [HeaderComponent, SideBarComponent, RouterOutlet, BreadcrumbComponent, MenuActionTableComponent],
	styleUrl: './home.component.css',
	templateUrl: './home.component.html'
})
export class HomeComponent {}
