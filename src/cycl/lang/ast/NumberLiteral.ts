import { AST } from "./AST";
export class NumberLiteral extends AST {
    constructor(private value: number) { super(); }
    toJS(): string { return String(this.value); }
    get children(): AST[] { return []; }
    inspect(): string { return `Number(${this.toJS()})`; }
}
