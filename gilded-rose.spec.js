import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";


// Example Test
describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  })
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 3, 3);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(2);

  
  });
});
