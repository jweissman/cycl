import chalk from 'chalk';
import { AST, Program, GetCommand, WithinSelector, IdSelector, ElementSelector } from "./AST";
import Grammar from "./Grammar";
import semantics from "./Semantics";
import { Dict } from 'ohm-js';

export default class Parser {
    analyze(input: string): AST {
        return Parser.tree(input);
        //return new Program([
        //    new GetCommand(
        //        new WithinSelector(
        //            new IdSelector("list"),
        //            new ElementSelector("li")
        //        )
        //    )
        //])
    }

    static noop = new Program([]);

    static tree(input: string): AST { 
        let code = input.trim();
        if (code.length === 0) {
            return Parser.noop;
        }

        let match = Grammar.match(code);
        if (match.succeeded()) {
            let semanteme: Dict = semantics(match);
            return semanteme.tree;
        } else {
            console.log(chalk.blue(match.message))
            throw new SyntaxError(match.shortMessage)
        }
    }
}