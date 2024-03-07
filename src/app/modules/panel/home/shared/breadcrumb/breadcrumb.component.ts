import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
	selector: 'app-breadcrumb',
	standalone: true,
	imports: [BreadcrumbModule],
	templateUrl: './breadcrumb.component.html',
	styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
	items = [{ label: 'Home' }, { label: 'Products' }, { label: 'Product A' }];
}
