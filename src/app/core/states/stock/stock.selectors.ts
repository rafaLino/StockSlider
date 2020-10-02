import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter } from './stock.reducer';
import { StockState } from './stock.state';


const state = createFeatureSelector<StockState>('stock');

const AsList = createSelector(state, (x => Object.values(x.entities)));

const isLoading = createSelector(state, x => x.loading);

export const StockSelectors = {
    ...adapter.getSelectors(state),
    AsList,
    isLoading
}