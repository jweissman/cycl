import { AST } from "./AST";
export class Expectation extends AST {
    constructor(private condition: AST, private value: AST) {
        super();
    }
    toJS(): string {
        return `should(${this.condition.toJS()}, ${this.value.toJS()})`;
    }
    get children(): AST[] {
        return [this.condition, this.value];
    }
    inspect(): string {
        return `expect(${this.condition.inspect()}, ${this.value.inspect()})`;
    }
}
