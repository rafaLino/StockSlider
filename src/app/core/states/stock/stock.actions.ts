import { createAction, props } from '@ngrx/store';
import { Stock } from '../../entities/stock.model';

class Actions {

    public get = createAction('[STOCK] get all stocks');

    public create = createAction('[STOCK] create stock',
        props<{ stock: Stock }>());

    public update = createAction('[STOCK] update stock',
        props<{ id: string, changes: Partial<Stock> }>());

    public remove = createAction('[STOCK] remove stock',
        props<{ id: string }>());

    public success = createAction('[STOCK] operation successful',
        props<{ stock?: Stock | Array<Stock>, actionType: string }>());

    public error = createAction('[STOCK] operation failed',
        props<{ error: Error | any, actionType: string }>());
}

export const StockActions = new Actions()