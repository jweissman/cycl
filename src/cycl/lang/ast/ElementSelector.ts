import { Selector } from "./Selector";
export class ElementSelector extends Selector {
    inspect(): string {
        return `element(${this.value})`;
    }
    toJS(): string {
        return this.value;
    }
}
