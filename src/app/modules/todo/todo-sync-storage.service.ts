import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from './store/todo.reducer';
import { TodoFeatureSelector } from './store/todo.selectors';
import { filter } from 'rxjs/operators';
import { TodoLoadAction } from './store/todo.actions';

export const LOCAL_STORAGE_KEY = 'todo';

@Injectable({
  providedIn: 'root',
})
export class TodoSyncStorageService {
  private isInit = false;
  constructor(private store$: Store<TodoState>) {}

  init() {
    if (this.isInit) {
      return;
    }
    this.isInit = true;
    this.loadFromStorage();

    this.store$
      .pipe(select(TodoFeatureSelector), filter(Boolean))
      .subscribe((state) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      });

    window.addEventListener('storage', () => this.loadFromStorage());
  }

  private loadFromStorage(): void {
    const storageState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(
        new TodoLoadAction({
          state: JSON.parse(storageState),
        })
      );
    }
  }
}
