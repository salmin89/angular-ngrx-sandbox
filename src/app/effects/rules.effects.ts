import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, mapTo, of, timer } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadAllRules, loadAllRulesSuccess } from '../actions/rules.actions';

const fakeApi = timer(1000).pipe(map(() => ['a', 'b', 'c']));

@Injectable()
export class RulesEffects {
  loadRules$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllRules),
      mergeMap(({ empty }) => {
        return fakeApi.pipe(
          map((data) => loadAllRulesSuccess({ data: empty ? [] : data })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions) {}
}
