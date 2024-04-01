import { Item } from './Item';

export class BackstagePass extends Item {
    update(): void {
        super.update();
        this.updateBackstagePassQuality();
    }

    private updateBackstagePassQuality(): void {
        let factor = 1;

        if (this.sellIn <= 0) {
            this.quality = 0;
        } else if (this.sellIn <= 5) {
            factor = 3;
        } else if (this.sellIn <= 10) {
            factor = 2;
        }

        this.highestQuality(factor);
    }
}