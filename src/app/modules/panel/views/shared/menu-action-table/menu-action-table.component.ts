import { Component, OnInit } from '@angular/core';
import { Unsubscribe } from '@core/subs-handler/unsubscribe';
import { ButtonModule } from 'primeng/button';
import { takeUntil } from 'rxjs';
import { MenuActionTableService } from './service/menu-action-table.service';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-menu-action-table',
	standalone: true,
	imports: [ButtonModule, NgClass],
	templateUrl: './menu-action-table.component.html',
	styleUrl: './menu-action-table.component.css'
})
export class MenuActionTableComponent extends Unsubscribe implements OnInit {
	isEditing!: boolean;
	isDeleting!: boolean;
	isAdding!: boolean;

	constructor(private menuATService: MenuActionTableService) {
		super();
	}

	ngOnInit(): void {
		this.InitObs();
	}

	private InitObs() {
		this.menuATService.editingObservable.pipe(takeUntil(this.unsubscribe$)).subscribe((_isEditing) => {
			this.isEditing = _isEditing;
		});
		this.menuATService.deletingObservable.pipe(takeUntil(this.unsubscribe$)).subscribe((_isDeleting) => {
			this.isDeleting = _isDeleting;
		});
		this.menuATService.addingObservable.pipe(takeUntil(this.unsubscribe$)).subscribe((_isAdding) => {
			this.isAdding = _isAdding;
		});
	}

	editingEmit() {
		this.menuATService.editingActiveEmitter();
	}

	deletingEmit() {
		this.menuATService.deletingActiveEmitter();
	}

	addingEmit() {
		this.menuATService.addingActiveEmitter();
	}
}
