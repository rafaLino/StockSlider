import { Entity } from './entity.model';
import { Stock } from './stock.model';

export class Operation extends Entity {
    stock: Stock;
    paidValue: number;
    stockValue: number;
    date: Date;
}