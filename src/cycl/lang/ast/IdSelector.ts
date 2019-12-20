import { Selector } from "./Selector";
export class IdSelector extends Selector {
    inspect(): string {
        return `css-id(${this.value})`;
    }
    toJS(): string {
        return `#${this.value}`;
    }
}
