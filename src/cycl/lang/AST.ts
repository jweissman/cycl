export abstract class AST {
    abstract get children(): AST[];
    abstract toJS(): string;
    abstract inspect(): string;
}

export abstract class Selector extends AST {
    constructor(protected value: string) {
        super();
    }

    get children(): AST[] { return [] }
}

export class ElementSelector extends Selector { 
    inspect(): string {
        return `element(${this.value})`
    }

    toJS(): string {
        return this.value;
    }
}

export class IdSelector extends Selector { 
    inspect(): string {
        return `css-id(${this.value})`
    }

    toJS(): string {
        return `#${this.value}`
    }
}

export class ClassSelector extends Selector { 
    inspect(): string {
        return `css-class(${this.value})`
    }

    toJS(): string {
        return `.${this.value}`
    }
}

export class WithinSelector extends AST {
    constructor(private container: Selector, private content: Selector) {
        super();
    }
    get children(): AST[] { return [this.container, this.content]}
    toJS(): string { return `${this.container.toJS()}>${this.content.toJS()}`}
    inspect() { return `${this.content.inspect()} within ${this.container.inspect()}`}
}

export class GetCommand extends AST {
    constructor(private item: AST) {
        super();
    }
    get children() { return [this.item]; }
    inspect() { return `get ${this.item.inspect()}` }
    toJS() {
        return `cy.get('${this.item.toJS()}')`;
    }
}

export class VisitPageCommand extends AST {
    constructor(private page: StringLiteral) {
        super();
    }
    get children(): AST[] { return []}
    inspect() { return `visit ${this.page.inspect()}`}
    toJS() { return `cy.visit(${this.page.toJS()})`}
}

export class ContainsTextCommand extends AST {
    constructor(private text: StringLiteral) {
        super();
    }
    get children(): AST[] { return [this.text]}
    inspect() { return `contains ${this.text.inspect()}`};
    toJS() { return `cy.contains(${this.text.toJS()})`; }
}

export class Chain extends AST {
    constructor(private commands: AST[]) { super(); }
    get children(): AST[] { return this.commands; }
    toJS(): string {
        return this.commands.map(cmd => cmd.toJS()).join(".");
    }
    inspect(): string {
        return this.commands.map(cmd => cmd.inspect()).join(" -> ");
    }
}

export class Expectation extends AST {
    constructor(private condition: AST, private value: AST) {
        super();
    }
    toJS(): string {
        return `should(${this.condition.toJS()}, ${this.value.toJS()})`
    }
    get children(): AST[] {
        return [ this.condition, this.value ];
    }
    inspect(): string {
        return `expect(${this.condition.inspect()}, ${this.value.inspect()})`
    }
}

export class StringLiteral extends AST {
    constructor(private value: string) { super(); }
    toJS(): string { return `'${this.value}'`; }
    get children(): AST[] { return [] }
    inspect(): string { return `String(${this.toJS()})`; }
}

export class NumberLiteral extends AST {
    constructor(private value: number) { super(); }
    toJS(): string { return String(this.value); }
    get children(): AST[] { return [] }
    inspect(): string { return `Number(${this.toJS()})`; }
}

export class Program extends AST {
    constructor(private commands: AST[]) {
        super();
    }
    get children() { return this.commands; }
    inspect() {
        return this.commands.map(c => c.inspect()).join("\n") + "---"
    }
    toJS(): string {
        return this.commands.map(command => command.toJS()).join("\n");
    }
}
