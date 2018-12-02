function repeatCount(str, n) {
    for(let char of str) {
        let count = 0;
        for (let char2 of str) {
            if (char2 == char) count++;
        }
        if (count == n) return true;
    }
    return false;
}

module.exports.runA = function(data) {
    let countTwo = 0; let countThree = 0;
    for (let id of data) {
        // check for two
        if (repeatCount(id, 2)) countTwo++;
        // check for three
        if (repeatCount(id, 3)) countThree++;
    }
    console.log(countTwo*countThree);
}

function diffNum(a, b) {
    let diffn = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) diffn++;
    }
    return diffn;
}

function similar(a, b) {
    let result = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b[i]) result += a[i];
    }
    return result;
}

module.exports.runB = function(data) {
    for (let i = 0; i < data.length; i++) {
        let idI = data[i];
        for (let j = i+1; j < data.length; j++) {
            let idJ = data[j];
            if (diffNum(idI, idJ) == 1) {
                console.log(similar(idI, idJ));
                break;
            }
        }
    }
}