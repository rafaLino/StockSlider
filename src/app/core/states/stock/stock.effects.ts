import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { AppState } from '..';
import { Stock } from '../../entities/stock.model';
import { StockFirebaseService } from '../../services/stock.firebase.service';
import { StockActions } from './stock.actions';
import { StockSelectors } from './stock.selectors';

@Injectable()
export class StockEffect {

    constructor(
        private store: Store<AppState>,
        private actions$: Actions,
        private stockFirebaseService: StockFirebaseService
    ) { }

    get$ = createEffect(() => this.actions$.pipe(
        ofType(StockActions.get),
        withLatestFrom(this.store.select(StockSelectors.AsList)),
        switchMap(([action, list]) => {
            if (list && list.length > 0)
                return of(action).pipe(tap(() => StockActions.success({ stock: list, actionType: action.type })))

            return from(this.stockFirebaseService.get())
                .pipe(
                    map(stocks => StockActions.success({ stock: stocks, actionType: action.type })),
                    catchError(er => of(StockActions.error({ actionType: action.type, error: er })))
                );
        })
    ));

    create$ = createEffect(() => this.actions$.pipe(
        ofType(StockActions.create),
        switchMap(({ stock, type }) => {
            return from(this.stockFirebaseService.create(stock))
                .pipe(
                    map(id => {
                        stock.id = id;
                        return StockActions.success({ stock, actionType: type });
                    }),
                    catchError(er => of(StockActions.error({ actionType: type, error: er })))
                )
        })
    ));

    update$ = createEffect(() => this.actions$.pipe(
        ofType(StockActions.update),
        switchMap(({ id, changes, type }) =>
            from(this.stockFirebaseService.update(id, ({ ...changes } as Stock)))
                .pipe(
                    map(() => StockActions.success({ actionType: type })),
                    catchError(er => of(StockActions.error({ actionType: type, error: er })))
                )
        )
    ));

    remove$ = createEffect(() => this.actions$.pipe(
        ofType(StockActions.remove),
        switchMap(({ id, type }) =>
            from(this.stockFirebaseService.delete(id))
                .pipe(
                    map(() => StockActions.success({ actionType: type })),
                    catchError(er => of(StockActions.error({ actionType: type, error: er })))
                )
        )
    ));


}