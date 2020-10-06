import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on, State } from '@ngrx/store';
import { Stock } from '../../entities/stock.model';
import { StockActions } from './stock.actions';
import { StockState } from './stock.state';


export const adapter: EntityAdapter<Stock> = createEntityAdapter<Stock>();

const initialState: StockState = adapter.getInitialState({
    error: false,
    loading: false,
    errors: undefined
});


const stockreducer = createReducer(
    initialState,
    on(StockActions.get, state => {
        return {
            ...state,
            loading: true,
            error: false,
            errors: undefined
        };
    }),
    on(StockActions.create, state => {
        return {
            ...state,
            loading: true,
            error: false,
            errors: undefined
        };
    }),
    on(StockActions.update, (state, { id, changes }) => {
        return adapter.updateOne({
            id,
            changes
        }, {
            ...state,
            loading: true,
            error: false,
            errors: undefined
        });
    }),
    on(StockActions.remove, (state, { id }) => {
        return adapter.removeOne(id,
            {
                ...state,
                loading: true,
                error: false,
                errors: undefined
            });
    }),
    on(StockActions.success, (state, { stock, actionType }) => {
        console.log(actionType + ' successfull');
        if (stock && Array.isArray(stock)) {
            return adapter.setAll(stock as Array<Stock>,
                {
                    ...state,
                    loading: false,
                    error: false,
                    errors: undefined
                });
        }
        else if (stock) {
            return adapter.setOne(stock as Stock,
                {
                    ...state,
                    loading: false,
                    error: false,
                    errors: undefined
                });
        }
        else
            return {
                ...state,
                loading: false,
                error: false,
                errors: undefined
            }
    }),
    on(StockActions.error, (state, { error, actionType }) => {
        console.log(actionType + ' failed');
        return {
            ...state,
            loading: false,
            error: true,
            errors: error
        };
    })
);

export function reducer(state: StockState, action: Action) {
    return stockreducer(state, action);
}