import { Selector } from "./Selector";
import { AST } from "./AST";
export class WithinSelector extends AST {
    constructor(private container: Selector, private content: Selector) {
        super();
    }
    get children(): AST[] { return [this.container, this.content]; }
    toJS(): string { return `${this.container.toJS()}>${this.content.toJS()}`; }
    inspect() { return `${this.content.inspect()} within ${this.container.inspect()}`; }
}
