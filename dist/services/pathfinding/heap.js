"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Heap {
    constructor(maxHeapSize) {
        this.heapSize = 0;
        this.maxHeapSize = maxHeapSize;
        this.items = new Array(this.maxHeapSize);
    }
    get count() {
        return this.heapSize;
    }
    add(item) {
        item.heapIndex = this.heapSize;
        this.items[this.heapSize] = item;
        this.sortUp(item);
        this.heapSize++;
    }
    removeFirst() {
        const first = this.items[0];
        this.heapSize--;
        this.items[0] = this.items[this.heapSize];
        this.items[0].heapIndex = 0;
        this.sortDown(this.items[0]);
        return first;
    }
    update(item) {
        this.sortUp(item);
    }
    contains(item) {
        if (!this.items[item.heapIndex]) {
            return false;
        }
        return item === this.items[item.heapIndex];
    }
    sortDown(item) {
        while (true) {
            const swapLeft = item.heapIndex * 2 + 1;
            const swapRight = item.heapIndex * 2 + 2;
            let swapIndex = 0;
            if (swapLeft < this.heapSize) {
                swapIndex = swapLeft;
                if (swapRight < this.heapSize) {
                    if (this.items[swapLeft].compareTo(this.items[swapRight]) < 0) {
                        swapIndex = swapRight;
                    }
                }
                if (item.compareTo(this.items[swapIndex]) < 0) {
                    this.swap(item, this.items[swapIndex]);
                }
                else {
                    return;
                }
            }
            else {
                return;
            }
        }
    }
    sortUp(item) {
        let parentIndex = Math.round((item.heapIndex - 1) / 2);
        while (true) {
            const parent = this.items[parentIndex];
            if (item.compareTo(parent) > 0) {
                this.swap(item, parent);
            }
            else {
                break;
            }
            parentIndex = Math.round((item.heapIndex - 1) / 2);
        }
    }
    swap(itemA, itemB) {
        this.items[itemA.heapIndex] = itemB;
        this.items[itemB.heapIndex] = itemA;
        const aIndex = itemA.heapIndex;
        itemA.heapIndex = itemB.heapIndex;
        itemB.heapIndex = aIndex;
    }
}
exports.Heap = Heap;
