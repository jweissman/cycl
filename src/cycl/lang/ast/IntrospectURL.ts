import { AST } from "./AST";

export class IntrospectURL extends AST {
    get children(): AST[] { return []}
    toJS(): string {
        return 'cy.url()'
    }
    inspect(): string {
        return 'introspect-url'
    }
}