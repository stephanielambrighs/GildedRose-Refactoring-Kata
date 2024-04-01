import { Item } from "@/item/Item";
import { GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should update quality for all items', () => {
    const items = [
      new Item("Normal Item", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    ];

    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();

    expect(updatedItems[0].quality).toBe(19);
    expect(updatedItems[0].sellIn).toBe(9);

    expect(updatedItems[1].quality).toBe(1)
    expect(updatedItems[1].sellIn).toBe(1);

    expect(updatedItems[2].quality).toBe(21);
    expect(updatedItems[2].sellIn).toBe(14);
  });
});

describe('Item', () => {
  describe('constructor', () => {
    it('should set name, sellIn, and quality correctly', () => {
      const item = new Item('Test Item', 5, 10);
      expect(item.name).toBe('Test Item');
      expect(item.sellIn).toBe(5);
      expect(item.quality).toBe(10);
    });
  });

  describe('highestQuality', () => {
    it('should increase quality by 1 when no factor is provided', () => {
      const item = new Item('Test Item', 5, 10);
      item.highestQuality();
      expect(item.quality).toBe(11);
    });

    it('should increase quality by specified factor', () => {
      const item = new Item('Test Item', 5, 10);
      item.highestQuality(2);
      expect(item.quality).toBe(12);
    });

    it('should not increase quality above MAX_QUALITY', () => {
      const item = new Item('Test Item', 5, 50);
      item.highestQuality();
      expect(item.quality).toBe(50);
    });
  });

  describe('lowestQuality', () => {
    it('should decrease quality by 1 when no factor is provided', () => {
      const item = new Item('Test Item', 5, 10);
      item.lowestQuality();
      expect(item.quality).toBe(9);
    });

    it('should decrease quality by specified factor', () => {
      const item = new Item('Test Item', 5, 10);
      item.lowestQuality(2);
      expect(item.quality).toBe(8);
    });

    it('should not decrease quality below MIN_QUALITY', () => {
      const item = new Item('Test Item', 5, 0);
      item.lowestQuality();
      expect(item.quality).toBe(0);
    });
  });

  describe('lowestSellIn', () => {
    it('should decrease sellIn by 1', () => {
      const item = new Item('Test Item', 5, 10);
      item.lowestSellIn();
      expect(item.sellIn).toBe(4);
    });
  });

  describe('applyLowestSellIn', () => {
    it('should decrease quality by 1', () => {
      const item = new Item('Test Item', 5, 10);
      item.applyLowestSellIn();
      expect(item.quality).toBe(9);
    });
  });

  describe('#applyNegativeSellIn', () => {
    it('should decrease quality by 2 if quality is greater than 1', () => {
      const item = new Item('Test Item', -1, 10);
      item.applyNegativeSellIn();
      expect(item.quality).toBe(8);
    });

    it('should decrease quality by 1 if quality is 1', () => {
      const item = new Item('Test Item', -1, 1);
      item.applyNegativeSellIn();
      expect(item.quality).toBe(0);
    });

    it('should not decrease quality below 0', () => {
      const item = new Item('Test Item', -1, 0);
      item.applyNegativeSellIn();
      expect(item.quality).toBe(0);
    });
  });

  describe('update', () => {
    it('should decrease sellIn by 1', () => {
      const item = new Item('Test Item', 5, 10);
      item.update();
      expect(item.sellIn).toBe(4);
    });

  });
});
