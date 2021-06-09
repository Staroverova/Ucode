'use strict'

exports.LLData = class {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}