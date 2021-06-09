'use strict'

const { LLData } = require("./LLData");

exports.LList = class {
    first = null;
    last = null;
    _count;

    getFirst() {
        return this.first;
    }

    getLast() {
        return this.last;
    }

    add(value) {
        const newElem = new LLData(value);
        if(this.last) {
            this.last.next = newElem;
            this.last = newElem;
            return;
        }
        if(!this.first) {
            this.first = newElem;
        }
        this.last = newElem;
    }

    addFromArray(arrayOfData) {
        arrayOfData.map(item => this.add(item));
    }

    remove(value) {
        if(!this.first || this.first === this.last) {
            return false;
        }
        if(this.first.data === value) {
            this.first = this.first.next;
            return true;
        }
        let current = this.first;
        while(current.next) {
            if(current.next.data === value) {
                if(this.last === current.next) {
                    this.last = current;
                }
                current.next = current.next.next;

                return true;
            } else {
                current = current.next;
            }
        }
        return false;
    }

    removeAll(value) {
        do {} while (this.remove(value));
    }

    contains(value) {
        if(!this.first) {
            return false;
        }
        let current = this.first;
        while(current) {
            if(current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    clear() {
        this.first = this.last = null;
    }

    count() {
        this._count = 0;
        if(!this.first) {
            return 0;
        }
        let current = this.first;
        while(current) {
            this._count++;
            current = current.next;
        }
        return this._count;
    }

    toString() {
        let result = [];
        if(!this.first) {
            return '';
        }
        let current = this.first;
        while(current) {
            result.push(current.data);
            current = current.next;
        }
        return result.join(', ');
    }

    filter(callback) {
        if(!this.first) {
            return null;
        }
        let newList = Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
        let current = newList.first;
        while(current) {
            if(!callback(current.data)) {
                newList.remove(current.data);
            }
            current = current.next;
        }
        return newList;
    }

    *[Symbol.iterator]() {
        if(!this.first) {
            return;
        }
        let current = this.first;
        while(current) {
            yield current.data;
            current = current.next;
        }
    }
    _next = this[Symbol.iterator]();
    next() {
        return this._next.next();
    }
    getIterator() {
        return this[Symbol.iterator]();
    }

}

//
// /*
//   Task name: LinkedList
// */
// /* file test.js */
//
// const {LList} = require("./LList");
//
// const list = new LList();
//
// list.addFromArray([100, 1, 2, 3, 100, 4, 5, 100]);
//
// list.add(10);
//
// const onlySmallList = list.filter((data) => {
//     return data < 18;
// });
//
// let sumOfAll = 0;
//
// for (const data of list) {
//     sumOfAll += data;
// }
//
// console.log([...list]); // [ 100, 1,   2,  3, 100, 4, 5, 100, 10 ]
// console.log([...onlySmallList]); // [ 1, 2, 3, 4, 5, 10 ]
// console.log(sumOfAll); // 325
// console.log(list.contains(10)); // true
// console.log(list.contains(22)); // false
//
// list.clear()
//
// console.log([...list]); // []