import { createSelector } from '@ngrx/store';
import { RulesState } from '../reducers/rules.reducer';

export interface AppState {
  rules: RulesState;
}

export const selectRulesFeature = (state: AppState) => state.rules;

export const selectAllRules = createSelector(
  selectRulesFeature,
  (state: RulesState) => state.data
);
