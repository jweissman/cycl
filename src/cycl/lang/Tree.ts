import { Node } from 'ohm-js';
import { Program, GetCommand, WithinSelector, ElementSelector, IdSelector, ClassSelector } from './AST';
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

    // BrowserOp_chain

    NonemptyListOf: (eFirst: Node, _sep: any, eRest: Node) => {
        let result = [eFirst.tree, ...eRest.tree];
        return result;
    },

    EmptyListOf: () => { return []; },
};

export default Tree;