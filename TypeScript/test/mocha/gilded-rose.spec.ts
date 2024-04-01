import { expect } from 'chai';
import { Item } from "@/item/Item";
import { Sulfuras } from '@/item/Sulfuras';
import { GildedRose } from '@/gilded-rose';
const assert = require('assert');


describe('Gilded Rose', function () {
  let gildedRose;

  beforeEach(function () {
    gildedRose = new GildedRose([
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6)
    ]);
  });

  describe('Update Quality for Day 1', function () {
    it('should update the items correctly for day 1', function () {
      gildedRose.updateQuality();
      const items = gildedRose.items;
      expect(items[0].sellIn).to.equal(9);
      expect(items[0].quality).to.equal(19);

      expect(items[1].sellIn).to.equal(1);
      expect(items[1].quality).to.equal(1);

      expect(items[2].sellIn).to.equal(4);
      expect(items[2].quality).to.equal(6);

      expect(items[3].sellIn).to.equal(0);
      expect(items[3].quality).to.equal(80);

      expect(items[4].sellIn).to.equal(-1);
      expect(items[4].quality).to.equal(80);

      expect(items[5].sellIn).to.equal(14);
      expect(items[5].quality).to.equal(21);

      expect(items[6].sellIn).to.equal(9);
      expect(items[6].quality).to.equal(50);

      expect(items[7].sellIn).to.equal(4);
      expect(items[7].quality).to.equal(50);

      expect(items[8].sellIn).to.equal(2);
      expect(items[8].quality).to.equal(5);
    });
  });
});

describe('Item | update', function () {
  describe('General behavior', function () {
      let item;

      beforeEach(function () {
          item = new Item('foo', 10, 20);
      });

      it('should decrease sellIn by 1', function () {
          item.update();
          expect(item.sellIn).to.equal(9);
      });

      it('should decrease quality by 1', function () {
          item.update();
          expect(item.quality).to.equal(19);
      });
  });

  describe('When quality is already at 0', function () {
      let item;

      beforeEach(function () {
          item = new Item('foo', 10, 0);
      });

      it('should decrease sellIn by 1', function () {
          item.update();
          expect(item.sellIn).to.equal(9);
      });

      it('should not change quality', function () {
          item.update();
          expect(item.quality).to.equal(0);
      });
  });

  describe('When sellIn is negative', function () {
      let item;

      beforeEach(function () {
          item = new Item('foo', 0, 2);
      });

      it('should decrease sellIn by 1', function () {
          item.update();
          expect(item.sellIn).to.equal(-1);
      });

      it('should decrease quality by 2', function () {
          item.update();
          expect(item.quality).to.equal(0);
      });
  });
});
