import { Entity } from './entity.model';

export class Stock extends Entity {
    name: string;
    userId: string;
    enabled: boolean;
}