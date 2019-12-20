import { Node } from 'ohm-js';
import { ContainsTextCommand } from "./ast/ContainsTextCommand";
import { VisitPageCommand } from "./ast/VisitPageCommand";
import { GetCommand } from "./ast/GetCommand";
import { WithinSelector } from "./ast/WithinSelector";
import { ClassSelector } from "./ast/ClassSelector";
import { IdSelector } from "./ast/IdSelector";
import { ElementSelector } from "./ast/ElementSelector";
import { Chain } from "./ast/Chain";
import { Expectation } from "./ast/Expectation";
import { StringLiteral } from "./StringLiteral";
import { NumberLiteral } from "./ast/NumberLiteral";
import { Program } from "./Program";
import { ClickCommand } from './ast/ClickCommand';
import { IntrospectURL } from './ast/IntrospectURL';

const Tree = {
    Program: (statements: Node, _delim: Node) => {
        return new Program(statements.tree)
    },

    ContainsText: (_contains: Node, _lparen: Node, text: Node, _rparen: Node) =>
        new ContainsTextCommand(text.tree),

    VisitPage: (_visit: Node, _lparen: Node, route: Node, _rparen: Node) =>
        new VisitPageCommand(route.tree),
    
    ClickElement: (_click: Node, _parens: Node) => new ClickCommand(),

    GetElement: (_find: Node, _lparen: Node, selector: Node, _rparen: Node) => {
        return new GetCommand(selector.tree);
    },

    Selector_within: (left: Node, _gt: Node, right: Node) => {
        return new WithinSelector(left.tree, right.tree);
    },

    ElementSelector: (elem: Node) =>
        new ElementSelector(elem.sourceString),

    ClassSelector: (_octothorpe: Node, elem: Node) =>
        new ClassSelector(elem.sourceString),

    IdSelector: (_octothorpe: Node, elem: Node) =>
        new IdSelector(elem.sourceString),

    BrowserOp_chain: (left: Node, _dot: Node, right: Node) =>
        new Chain([left.tree, right.tree]),

    Expectation: (_should: Node, expected: Node) => expected.tree,
    
    Expected: (_lp: Node, cond: Node, _comma: Node, val: Node, _rp: Node) => {
        return new Expectation(cond.tree, val.tree)
    },

    IntrospectURL: (_url: Node, _parens: Node) => {
        return new IntrospectURL();
    },

    StringLiteral_single: (_lq: Node, contents: Node, _rq: Node) => new StringLiteral(contents.sourceString),
    StringLiteral_double: (_lq: Node, contents: Node, _rq: Node) => new StringLiteral(contents.sourceString),
    NumberLiteral: (digits: Node) => new NumberLiteral(Number(digits.sourceString)),
    

    NonemptyListOf: (eFirst: Node, _sep: any, eRest: Node) => {
        let result = [eFirst.tree, ...eRest.tree];
        return result;
    },
    EmptyListOf: () => { return []; },
};

export default Tree;