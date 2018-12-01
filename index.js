/**
 * PROBLEM LOADER
 * usage: npm run <#> <a|b>
 */

// set up arguments
const args = process.argv.slice(2);
const problem_no = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(args[0]);
const part = args[1];

// load the problem
const problem = require(`./problems/p${problem_no}`);

// load the data
const fs = require('fs');
fs.readFile(`./data/p${problem_no}.txt`, function(err, raw) {
    if (err) console.error("Could not load data!")

    // read file, process part
    const data = raw.toString('utf-8').split("\n");
    if (part.toLowerCase() == "a") problem.runA(data);
    else if (part.toLowerCase() == "b") problem.runB(data);
})

