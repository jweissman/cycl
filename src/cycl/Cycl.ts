import Parser from "./lang/Parser";

export default class Cycl {
    parser: Parser = new Parser();
    interpret(input: string): string {
        let tree = this.parser.analyze(input)
        return tree.toJS();
    }
}