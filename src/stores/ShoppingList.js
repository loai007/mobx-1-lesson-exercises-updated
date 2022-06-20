/* eslint-disable */
import { observable, action, makeObservable } from "mobx";
import { Item } from "./Item";

export class ShoppingList {
  constructor() {
    this.list = [];
    this.length = 0;

    makeObservable(this, {
      list: observable,
      length: observable,
      checkItem: action,
      addItem: action,
      editItem: action,
      deleteItem: action,
    });
  }
  checkItem = (name) => {
    let item = this.list.find((i) => i.name === name);
    item.completed = !item.completed;
  };
  addItem = (name) => {
    this.list.push(new Item(name));
  };
  editItem = (itemName, newLocation) => {
    let item = this.list.find((i) => i.name === itemName);
    item.location = newLocation;
  };
  deleteItem = (name) => {
    let index;
    for (let i in this.list) {
      if (this.list[i].name === name) {
        index = i;
      }
    }
    if (index) {
      this.list.splice(index, 1);
    }
  };
}
