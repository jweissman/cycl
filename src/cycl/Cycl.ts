import Parser from "./lang/Parser";

export default class Cycl {
    parser: Parser = new Parser();
    interpret(input: string): string {
        let tree = this.parser.analyze(input)
        console.log("CONVERT TO JS", tree.inspect())
        return tree.toJS();
    }

    embed(key: string, descriptor: string, input: string): string {
        return `${key}('${descriptor}', () => {\n${input}\n});`
    }
}