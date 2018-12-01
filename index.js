/**
 * PROBLEM LOADER
 * usage: npm run <#> <a|b>
 */

// set up arguments
const args = require('minimist')(process.argv.slice(2));
const problem_no = args[0];
const part = args[1];

// load the problem
const num_formatted = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(problem_no)
const problem = require(`./problems/p${num_formatted}`);

// load the data
const fs = require(fs);
fs.readFile(`./data/p${num_formatted}.txt`, function(err, data) {
    if (error) console.error("Could not load data!")
    else if (part == 'a' | part == 'A') problem.runA(data);
    else part.runB(data);
})

