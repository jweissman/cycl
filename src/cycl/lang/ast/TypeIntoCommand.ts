import { AST } from "./AST";

export class TypeIntoCommand extends AST {
    constructor(private text: AST) { super();}

    get children(): AST[] {
        return [this.text]
    }

    toJS(): string {
        return `type(${this.text.toJS()})`
    }
    inspect(): string {
        return `type ${this.text.inspect()}`;
    }


}