import { AST } from "./ast/AST";
export class Program extends AST {
    constructor(private commands: AST[]) {
        super();
    }
    get children() { return this.commands; }
    inspect() {
        return this.commands.map(c => c.inspect()).join("\n") + "---";
    }
    toJS(): string {
        return this.commands.map(command => command.toJS()).join("\n");
    }
}
