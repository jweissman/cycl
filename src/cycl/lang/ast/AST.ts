export abstract class AST {
    abstract get children(): AST[];
    abstract toJS(): string;
    abstract inspect(): string;
}