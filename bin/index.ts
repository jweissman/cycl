#!/usr/bin/env ts-node --project tsconfig.production.json

import cycl from '../src/cycl';
import fs from 'fs';
import { exec } from 'child_process'
import path from 'path';

const toSpec = (input: string, execute: boolean = false) => {
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
    fs.writeFile(targetPath, out, (err) => console.error(err));
    if (execute) {
        exec(`yarn cypress run --spec ${targetPath}`, (err, stdout, stderr) => {
            if (err) {
                console.error(err)
                return
            }
            console.log("stdout:" + stdout)
        })
    }
}

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("cycl. usage: cycl ./path/to/feature.cycl")
} else {
    const contents = fs.readFileSync(args[0]).toString();
    try { toSpec(contents) } catch (e) { console.warn(e.message) }
    fs.watchFile(args[0], (curr, prev) => {
        const contents = fs.readFileSync(args[0]).toString();
        try { toSpec(contents)  } catch (e) { console.warn(e.message) }
    });
    // fs.write
}
