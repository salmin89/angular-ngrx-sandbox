import { Action, createReducer, on } from '@ngrx/store';
import * as RulesActions from '../actions/rules.actions';

export interface RulesState {
  data: string[];
  loading: boolean;
}

export const initialState: RulesState = {
  data: null,
  loading: false,
};

export const rulesReducer = createReducer(
  initialState,
  on(RulesActions.loadAllRules, (state) => ({
    ...state,
    loading: true,
  })),
  on(RulesActions.loadAllRulesSuccess, (state, { data }) => ({
    ...state,
    data: [...data],
  }))
);
