#!/usr/bin/env ts-node --project tsconfig.production.json


import cycl from '../src/cycl';
import fs from 'fs';
import path from 'path';

const toSpec = (input: string) => {
    let result = cycl.interpret(input)
    let basename = path.basename(args[0])
    let testCaseName = basename.split(".")[0]
    let targetPath: string = `./cypress/integration/cycl/${testCaseName}.spec.js`
    console.log({ testCaseName, targetPath, basename, result });
    let out: string = cycl.embed('context', 'test-cases',
        cycl.embed('it', 'test', result)
    )
    console.log("OUT", out);
    fs.closeSync(fs.openSync(targetPath, 'w'));
    // fs.touch(targetPath);   
    fs.writeFile(targetPath, out, (err) => console.error(err));
}
// console.log("cycl!", { cycl })
// cycl.interpret("get(.button)")
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("would process all cycl files to js...")
    // cycl.repl();
} else {
    // console.log("would process all cycl files to js...")
    // cycl.repl();
    // const fs = require('fs');
    const contents = fs.readFileSync(args[0]).toString();
    try { toSpec(contents) } catch (e) { console.warn(e.message) }
    fs.watchFile(args[0], (curr, prev) => {
        const contents = fs.readFileSync(args[0]).toString();
        try { toSpec(contents)  } catch (e) { console.warn(e.message) }
    });
    // fs.write
}
