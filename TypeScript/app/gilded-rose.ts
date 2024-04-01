import { Item } from "./item/Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item: Item) => {
      item.update();
    })
    return this.items;
  }
}
