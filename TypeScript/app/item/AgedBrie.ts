import { Item } from './Item';

export class AgedBrie extends Item {
    update(): void {
        super.update();
        this.highestQuality();
    }
}