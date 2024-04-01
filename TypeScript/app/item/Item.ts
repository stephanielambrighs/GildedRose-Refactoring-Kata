export class Item {
    public static MIN_QUALITY: number = 0;
    public static MAX_QUALITY: number = 50;

    public static MIN_SELLIN: number = 0;
    public static MAX_SELLIN: number = 50;

    public static CHECK_QUALITY_STEP: number = 1;
    public static CHECK_SELL_IN_STEP: number = 1;

    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }

    highestQuality(factor: number = 1): void {
      this.quality = this.quality + Item.CHECK_QUALITY_STEP * factor;
      if (this.quality > Item.MAX_QUALITY) {
        this.quality = Item.MAX_QUALITY;
      }
    }

    lowestQuality(factor: number = 1): void {
      this.quality -= Item.CHECK_QUALITY_STEP * factor;
      if (this.quality < Item.MIN_QUALITY) {
        this.quality = Item.MIN_QUALITY;
      }
    }

    lowestSellIn(): void {
      this.sellIn -= Item.CHECK_SELL_IN_STEP;
    }

    applyLowestSellIn(): void {
      this.lowestQuality();
    }

    applyNegativeSellIn(): void {
      if (this.quality > 0) {
          this.lowestQuality(2);
      } else {
          this.lowestQuality();
      }
    }

    update(): void {
      this.applyLowestSellIn();
      this.lowestSellIn();
      if (this.sellIn < Item.MIN_SELLIN) {
        this.applyNegativeSellIn();
      }
    }
}
