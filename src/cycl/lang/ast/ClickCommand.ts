import { AST } from "./AST";

export class ClickCommand extends AST{
    get children(): AST[] { return [] }
    toJS(): string { return "click()"; }
    inspect(): string { return 'click' }
}