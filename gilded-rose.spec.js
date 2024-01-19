import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, BasicItem, LegendaryItem, UncommonItem } from "./gilded-rose.js";


describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new BasicItem("basic", 5, 53);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(52);
    expect(testItem.sellIn).toBe(4);
  })
  it("quality of an item can never be negative", () => {
    const testItem = new BasicItem("basicItem", 16, 0);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(15);
  });
  it("quality of an item can never be > 50", () => {
    const testItem = new UncommonItem("Aged Brie", 16, 50);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(15);
  });
  it("When sellIn < 0, quality degrades twice as fast", () => {
    const testItem = new BasicItem("basic", -3, 50);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(48);
    expect(testItem.sellIn).toBe(-4);
  });
  it("Aged Brie increases in value as it gets older", () => {
    const testItem = new UncommonItem("Aged Brie", 8, 23);
    items.push(testItem);
    updateQuality();
    updateQuality();
    updateQuality();
    expect(testItem.quality).toBe(26);
    expect(testItem.sellIn).toBe(5);
  });
  it("Sulfuras never changes in sellIn or Quality", () => {
    const testItem = new LegendaryItem("Sulfuras, Hand of Ragnaros", 100, 250);
    items.push(testItem);
    updateQuality();
    updateQuality();
    updateQuality();
    expect(testItem.quality).toBe(250);
    expect(testItem.sellIn).toBe(100);
  });
  it("Backstage item increases in quality as SellIn decreases, sellIn > 10", () => {
    const testItem = new UncommonItem("Backstage passes to a TAFKAL80ETC concert", 13, 16);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(17);
    expect(testItem.sellIn).toBe(12);
  });
  it("Backstage item increases in quality as SellIn decreases, 5 < sellIn < 10", () => {
    const testItem = new UncommonItem("Backstage passes to a TAFKAL80ETC concert", 8, 20);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(22);
    expect(testItem.sellIn).toBe(7);
  });
  it("Backstage item increases in quality as SellIn decreases, 0 < sellIn < 5", () => {
    const testItem = new UncommonItem("Backstage passes to a TAFKAL80ETC concert", 6, 12);
    items.push(testItem);
    updateQuality();
    updateQuality();
    updateQuality();
    expect(testItem.quality).toBe(20);
    expect(testItem.sellIn).toBe(3);
  });
  it("Backstage item quality goes to 0 after the concert", () => {
    const testItem = new UncommonItem("Backstage passes to a TAFKAL80ETC concert", 1, 200);
    items.push(testItem);
    updateQuality();
    updateQuality();
    updateQuality();
    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-2);
  });
});


