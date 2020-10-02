import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter } from './stock.reducer';
import { StockState } from './stock.state';


const state = createFeatureSelector<StockState>('stock');

const AsList = createSelector(state, (x => Object.values(x.entities)));


export const StockSelectors = {
    ...adapter.getSelectors(),
    AsList
}