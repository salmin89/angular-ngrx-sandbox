import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { loadAllRules } from '../actions/rules.actions';
import { selectAllRules } from '../selectors/rules-selectors';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
})
export class RulesComponent implements OnInit {
  constructor(private store: Store) {}

  rules$ = this.store.pipe(
    select(selectAllRules),
    filter((rules) => rules !== null)
  );
  rulesLoading$ = this.rules$.pipe(map((rules) => rules === null));
  rulesEmpty$ = this.rules$.pipe(map((rules) => !!rules.length));

  ngOnInit() {
    this.store.dispatch(loadAllRules({ empty: true }));
  }
}
