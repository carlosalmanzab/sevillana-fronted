import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuActionTableComponent } from './menu-action-table.component';

describe('MenuActionTableComponent', () => {
	let component: MenuActionTableComponent;
	let fixture: ComponentFixture<MenuActionTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MenuActionTableComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(MenuActionTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
