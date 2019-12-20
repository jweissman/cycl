# cycl

Cypress command language

## synopsis

A tiny language wrapping around the Cypress API for rapid external testing of web applications.

## about

Suppose we write 

```
# count.cycl
visit("localhost:3000");
get(#list > li).should("have.length", 2);
get(#counter).should("have.text", "0 clicks");
contains("increment").click;
get(#counter).should("have.text", "1 clicks");
```

to a file `count.cycl` somewhere, and then run `cycl path/to/count.cycl`.
Cycl will compile the test code, embed it in a small shell, and write the output JS to file.
It will end up in the Cypress `integration` folder in a file `cycl/count.js`, triggering test runner.
Cycl will watch the file for updates to trigger recompilation.

Several test runner commands have been modelled, including `visit`, `get`, `should`, `click` etc.

## commands

| Cycl                     | Cypress             |
|--------------------------|---------------------|
| `visit(string)`          | `cy.visit(string)`  |
| `get(selector)`          | `cy.get(selector)`  |
| `contains(text)`         | `cy.contains(text)` |
| `click`                  | `[receiver].click()` |
| `url`                    | `url.click()` |
| `.should(string, value)` | `[receiver].should(string, value)` |

### selectors

We "natively" model css ids, classes and 'within' (e.g., `.list > li`), so these sorts of forms don't need quotation:
you can just say `get(#list)` or `get(.div).should("have.length",2)`.
