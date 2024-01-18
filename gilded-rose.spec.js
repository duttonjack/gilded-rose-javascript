import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";



// Example Test
describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 53);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(52);
    expect(testItem.sellIn).toBe(4);
    
  })
  it("quality of an item can never be negative", () => {
    const testItem = new Item("basic", 16, 0);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(15);
  });
  it("quality of an item can never be > 50", () => {
    const testItem = new Item("Aged Brie", 16, 50);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(15);
  });
  it("When sellIn < 0, quality degrades twice as fast", () => {
    const testItem = new Item("basic", -3, 50);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(48);
    expect(testItem.sellIn).toBe(-4);
  });
  
});


