import { ActionReducerMap } from '@ngrx/store';
import { StockState } from './stock/stock.state';
import * as fromStockReducer from './stock/stock.reducer';
import { StockEffect } from './stock/stock.effects';

export interface AppState {
    stock: StockState
}

export const AppEffects = [
    StockEffect
]

export const appReducers: ActionReducerMap<AppState> = {
    stock: fromStockReducer.reducer
}