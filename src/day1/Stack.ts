export default class Stack<T> {
    public length: number = 0;
    private stack: T[] = [];

    constructor() {}

    push(item: T): void {
        this.stack.push(item);
        this.length += 1;
    }

    pop(): T | undefined {
        if (this.length === 0) return undefined;
        this.length -= 1;
        return this.stack.pop();
    }
    peek(): T | undefined {
        return this.stack[this.stack.length - 1];
    }
}
