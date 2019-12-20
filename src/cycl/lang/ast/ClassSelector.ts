import { Selector } from "./Selector";
export class ClassSelector extends Selector {
    inspect(): string {
        return `css-class(${this.value})`;
    }
    toJS(): string {
        return `.${this.value}`;
    }
}
