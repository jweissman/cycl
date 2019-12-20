# cycl

Cypress command language

## synopsis

A tiny language wrapping around the Cypress API for rapid external testing of web applications.

## about

Suppose we write 

```
visit("localhost:3000");
get(#list > li).should("have.length", 2);
get(#item);
contains("CYCL")
```

to a file `my-file.cycl`, and then run `cycl my-file.cycl`. Cycl will compile the test, and write the output JS to the Cypress `integration` folder to a file `cycl/my-file.js`, watching the file for updates to trigger recompilation.

Several test runner commands have been modelled, including `visit`, `get`, `should` etc.

Note we model CSS class names and identifiers directly, so you can just say `get(#list)` or `get(.div).should("have.length",2)`.
