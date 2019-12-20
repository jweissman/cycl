import Grammar from "./Grammar";
import Tree from "./Tree";
const semantics = Grammar.createSemantics()
semantics.addAttribute('tree', Tree);
export default semantics;