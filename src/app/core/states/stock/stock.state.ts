import { EntityState } from '@ngrx/entity';
import { Stock } from '../../entities/stock.model';
import { GlobalState } from '../global.state';

export interface StockState extends EntityState<Stock>,GlobalState {

}