import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * This service manages the state and events related to editing, deleting, and adding actions
 * in a menu action table.
 */
@Injectable({
	providedIn: 'root'
})
export class MenuActionTableService {
	/**
	 * Internal state variable indicating whether the editing mode is active.
	 * @private
	 */
	private _isEditing: boolean = false;

	/**
	 * Internal state variable indicating whether the deleting mode is active.
	 * @private
	 */
	private _isDeleting: boolean = false;

	/**
	 * Internal state variable indicating whether the adding mode is active.
	 * @private
	 */
	private _isAdding: boolean = false;

	/**
	 * Subject used to emit updates to the editing state.
	 * @private
	 */
	private editingSubject = new Subject<boolean>();

	/**
	 * Subject used to emit updates to the deleting state.
	 * @private
	 */
	private deletingSubject = new Subject<boolean>();

	/**
	 * Subject used to emit updates to the adding state.
	 * @private
	 */
	private addingSubject = new Subject<boolean>();

	/**
	 * EventEmitter used to emit an event when the editing mode is toggled.
	 * @private
	 */
	private editingClickEventEmitter = new EventEmitter<void>();

	/**
	 * EventEmitter used to emit an event when the deleting mode is toggled.
	 * @private
	 */
	private deletingClickEventEmmiter = new EventEmitter<void>();

	/**
	 * EventEmitter used to emit an event when the adding mode is toggled.
	 * @private
	 */
	private addingClickEventEmmiter = new EventEmitter<void>();

	/**
	 * Public setter for the editing state. Emits an update through the editingSubject.
	 * @param isEditing The new editing state value.
	 */
	setEditing(isEditing: boolean): void {
		this._isEditing = isEditing;
		this.editingSubject.next(isEditing);
	}

	/**
	 * Public getter for an observable that emits changes to the editing state.
	 */
	get editingObservable(): Observable<boolean> {
		return this.editingSubject.asObservable();
	}

	/**
	 * Public setter for the deleting state. Emits an update through the deletingSubject.
	 * @param isDeleting The new delete state value.
	 */
	setDeleting(isDeleting: boolean): void {
		this._isDeleting = isDeleting;
		this.deletingSubject.next(isDeleting);
	}

	/**
	 * Public getter for an observable that emits changes to the deleting state.
	 */
	get deletingObservable(): Observable<boolean> {
		return this.deletingSubject.asObservable();
	}

	/**
	 * Public setter for the deleting state. Emits an update through the editingSubject.
	 * @param isAdding The new editing state value.
	 */
	setAdding(isAdding: boolean): void {
		this._isAdding = isAdding;
		this.addingSubject.next(isAdding);
	}

	/**
	 * Public getter for an observable that emits changes to the adding state.
	 */
	get addingObservable(): Observable<boolean> {
		return this.addingSubject.asObservable();
	}

	/**
	 * Emits an event through the editingClickEventEmitter to signal a change in editing mode.
	 */
	editingActiveEmitter() {
		this.editingClickEventEmitter.emit();
	}

	/**
	 * Public getter for an EventEmitter used to listen for editing mode changes.
	 */
	get editingEventListener(): Observable<void> {
		return this.editingClickEventEmitter.asObservable();
	}

	/**
	 * Emits an event through the deletingClickEventEmitter to signal a change in deleting mode.
	 */
	deletingActiveEmitter() {
		this.deletingClickEventEmmiter.emit();
	}

	/**
	 * Public getter for an EventEmitter used to listen for deleting mode changes.
	 */
	get deletingEventListener(): Observable<void> {
		return this.deletingClickEventEmmiter.asObservable();
	}

	/**
	 * Emits an event through the addingClickEventEmitter to signal a change in adding mode.
	 */
	addingActiveEmitter() {
		this.addingClickEventEmmiter.emit();
	}

	/**
	 * Public getter for an EventEmitter used to listen for adding mode changes.
	 */
	get addingEventListener(): Observable<void> {
		return this.addingClickEventEmmiter.asObservable();
	}
}
