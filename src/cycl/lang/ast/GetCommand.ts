import { AST } from "./AST";
export class GetCommand extends AST {
    constructor(private item: AST) {
        super();
    }
    get children() { return [this.item]; }
    inspect() { return `get ${this.item.inspect()}`; }
    toJS() {
        return `cy.get('${this.item.toJS()}')`;
    }
}
