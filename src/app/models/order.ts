import { User } from './user';
import { Menu } from './menu';
export class Order {
    id?: number;
    status?: number;
    creationDate?: Date;
    menu: Menu;
    user: User;
    constructor(
        id: number,
        menu: Menu,
        user: User,
        status?: number,
        creationDate?: Date
    ) {
        this.id = id;
        this.status = status;
        this.creationDate = creationDate;
        this.menu = menu;
        this.user = user;
    }

}
