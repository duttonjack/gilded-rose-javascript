export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  decreaseQuality(){
    this.quality -= 1
  }
  increaseQuality(){
    this.quality += 1
  }
  checkOver50(){
    if (this.quality > 50) {
      this.quality = 50
    }
  }
  checkNegativeQuality(){
    if (this.quality < 0) {
      this.quality = 0
    }
  }
  passTime(){
    if (this.type !== 'legendary'){
      this.sellIn -= 1;
    }
  }
}

export class BasicItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
    this.type = "basic"
  }
  handleBasic(){
    this.decreaseQuality()
    if (this.sellIn < 0){
      this.decreaseQuality()
    }
  }
}

export class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
    this.type = "conjured"
  }
  handleConjured(){
    this.decreaseQuality()
    this.decreaseQuality()
    if (this.sellIn < 0){
      this.decreaseQuality()
      this.decreaseQuality()
    }
  }
}

export class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
    this.type = "legendary"
  }
}

export class UncommonItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
    if (this.name === "Aged Brie") {
      this.type = "brie"
    }
    if (this.name === "Backstage passes to a TAFKAL80ETC concert"){
      this.type = "ticket"
    }
  }
  handleTicket(){
    this.increaseQuality()
    if (this.sellIn < 11) {
      this.increaseQuality()
    }
    if (this.sellIn < 6) {
      this.increaseQuality()
    }
    if (this.sellIn < 0)
      this.quality = 0
  }
}

export let items = [];
// items.push(new BasicItem("+5 Dexterity Vest", 10, 20));
// items.push(new Item("Aged Brie", 2, 0));
// items.push(new BasicItem("Elixir of the Mongoose", 5, 7));
// items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
// items.push(new BasicItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
// items.push(new BasicItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    if (item.type === "legendary"){
      continue
    }
    if (item.type === "basic") {
        item.handleBasic()
    }
    if (item.type === "conjured"){
        item.handleConjured()
    }
    if (item.type === "brie") {
        item.increaseQuality();
        item.checkOver50()
    }
    if (item.type === "ticket") {
        item.handleTicket()
        item.checkOver50()
    }
    item.passTime()
    item.checkNegativeQuality()
  }
}







