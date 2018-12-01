module.exports.runA = function(data) {
    var freq = 0;
    for (var line of data) {
        freq += parseInt(line)
    }
    console.log(freq)
}

module.exports.runB = function(data) {
    var freq = 0;
    var frequencies = Array()
    var index = 0
    while (true) {
        line = data[index]
        frequencies.push(freq);
        freq += parseInt(line)
        if (frequencies.indexOf(freq) > -1) {
            console.log(freq);
            break;
        }
        index = (index + 1) % data.length
    }
}