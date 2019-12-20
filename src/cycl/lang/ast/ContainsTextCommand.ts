import { StringLiteral } from "../StringLiteral";
import { AST } from "./AST";
export class ContainsTextCommand extends AST {
    constructor(private text: StringLiteral) {
        super();
    }
    get children(): AST[] { return [this.text]; }
    inspect() { return `contains ${this.text.inspect()}`; }
    ;
    toJS() { return `cy.contains(${this.text.toJS()})`; }
}
