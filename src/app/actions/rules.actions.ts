import { createAction, props } from '@ngrx/store';

export const loadAllRules = createAction(
  '[Rules] Load All Rules',
  props<{ empty: boolean }>()
);

export const loadAllRulesSuccess = createAction(
  '[Rules] Load All Rules Success',
  props<{ data: string[] }>()
);
