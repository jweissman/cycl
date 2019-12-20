import { StringLiteral } from "../StringLiteral";
import { AST } from "./AST";
export class VisitPageCommand extends AST {
    constructor(private page: StringLiteral) {
        super();
    }
    get children(): AST[] { return []; }
    inspect() { return `visit ${this.page.inspect()}`; }
    toJS() { return `cy.visit(${this.page.toJS()})`; }
}
