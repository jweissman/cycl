import { AST } from "./ast/AST";
export class StringLiteral extends AST {
    constructor(private value: string) { super(); }
    toJS(): string { return `'${this.value}'`; }
    get children(): AST[] { return []; }
    inspect(): string { return `String(${this.toJS()})`; }
}
