import { Node } from 'ohm-js';
import { Program, GetCommand, WithinSelector, ElementSelector, IdSelector, ClassSelector, Chain, Expectation, StringLiteral, NumberLiteral } from './AST';
const Tree = {
    Program: (statements: Node) => {
        return new Program(statements.tree)
    },

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


    Expectation: (_should: Node, _lp: Node, cond: Node, _comma: Node, val: Node, _rp: Node) => {
        return new Expectation(cond.tree, val.tree)
    },

    StringLiteral: (_lq: Node, contents: Node, _rq: Node) => new StringLiteral(contents.sourceString),
    NumberLiteral: (digits: Node) => new NumberLiteral(Number(digits.sourceString)),
    

    NonemptyListOf: (eFirst: Node, _sep: any, eRest: Node) => {
        let result = [eFirst.tree, ...eRest.tree];
        return result;
    },
    EmptyListOf: () => { return []; },
};

export default Tree;