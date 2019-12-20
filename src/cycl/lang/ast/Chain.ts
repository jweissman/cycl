import { AST } from "./AST";
export class Chain extends AST {
    constructor(private commands: AST[]) { super(); }
    get children(): AST[] { return this.commands; }
    toJS(): string {
        return this.commands.map(cmd => cmd.toJS()).join(".");
    }
    inspect(): string {
        return this.commands.map(cmd => cmd.inspect()).join(" -> ");
    }
}
