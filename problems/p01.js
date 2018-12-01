module.exports.runA = function(data) {
    var freq = 0;
    for (var line of data) freq += parseInt(line); // sum up each line
    console.log(freq);
}

module.exports.runB = function(data) {
    var freq = 0; var frequencies = Array();
    let index = 0;

    // data cycle
    while (true) {
        frequencies.push(freq); // record last frequency
        line = data[index]; // parse next frequency
        freq += parseInt(line);
        if (frequencies.indexOf(freq) > -1) {
            console.log(freq);
            break;
        }
        index = (index + 1) % data.length; // iterate in a cycle
    }
}