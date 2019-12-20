import { AST } from "./AST";
export abstract class Selector extends AST {
    constructor(protected value: string) {
        super();
    }
    get children(): AST[] { return []; }
}
