// let exchangeRate = 1.2;
//
// let convert = function (euro) {
//     return euro * exchangeRate;
// }

// Problem: const or let can only be defined once

var exchangeRate = 1.2;

var convert = function (euro) {
    return euro * this.exchangeRate;
}

// Problem: exchangeRate and convert will be overwritten by scripts loaded later
